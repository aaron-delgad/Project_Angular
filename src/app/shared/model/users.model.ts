export class Users {
  id!: number;
  email!: string;
  username!: string;
  password!: string;
  name!:{
    firstname: string;
    lastname: string;
  };
  phone!: number;
  city!: string;
  street!: string;

  public static create_objects(objs: any): Users[] {
    let objects: Users[] = [];
    if(objs instanceof Array){
      objects = objs.map(function(resp){
        return Users.create_object(resp);
      });
    }
    return objects;
  }

  public static create_object(obj: any): Users {
    const object = new Users();
      object.id = obj.id? obj.id : null;
      object.email = obj.email? obj.email : '';
      object.username = obj.username? obj.username : '';
      object.password = obj.password? obj.password : '';
      object.name = {
        firstname: obj.name? obj.name.firstname : '',
        lastname: obj.name? obj.name.lastname : '',
      }
      object.phone = obj.phone? obj.phone : null;
      object.city = obj.city? obj.city : '';
      object.street = obj.street? obj.street : '';
      return object;
  }
}

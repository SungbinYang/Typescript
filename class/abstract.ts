abstract class AbstractPerson {
  protected _name: string = 'Rovert';

  abstract setName(name: string): void;
}

// new AbstractPerson() // 추상클래스는 new를 통해 생성이 불가능하다.

class People extends AbstractPerson {

  setName(name: string): void {
    this._name = name;
  }

}

const people = new People();
people.setName('Mark');
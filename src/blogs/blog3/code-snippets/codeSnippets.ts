export const codeSnippetSuper = `
// Superclass
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}`;

export const codeSnippetSub = `
// Subclass inheriting from Animal
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.sound(); // Output: "Dog barks"
    }
}`;

export const codeSnippetEncapsulation = `
class Student {
  private String name;
  private int age;

// Getter and Setter methods
  public String getName() {
      return name;
  }
  public void setName(String name) {
      this.name = name;
  }
  public int getAge() {
      return age;
  }
  public void setAge(int age) {
      if (age > 0) {
          this.age = age;
      } else {
          System.out.println("Invalid age");
      }
  }
}
public class Main {
  public static void main(String[] args) {
      Student student1 = new Student();
      student1.setName("John");
      student1.setAge(20);
      System.out.println("Name: " + student1.getName()); // Output: "Name: John"
      System.out.println("Age: " + student1.getAge());   // Output: "Age: 20"
  }
}`;

export const codeSnippetParent = `
// Parent class
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}`;

export const codeSnippetChild = `
// Child classes demonstrating method overriding
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.sound(); // Output: "Dog barks"
        myCat.sound(); // Output: "Cat meows"
    }
}`;

export const codeSnippetAbstract = `
// Abstract class
abstract class Shape {
    abstract void draw(); // Abstract method
}`;

export const codeSnippetConcrete = `
// Concrete subclass implementing the abstract method
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }
}`;

export const codeSnippetMain = `
public class Main {
  public static void main(String[] args) {
      Shape myShape = new Circle();
      myShape.draw(); // Output: "Drawing a circle"
  }
}`;

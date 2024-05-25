export const codeSnippetCar = `
public class Car {
  // Attributes
  private String model;
  private String color;
  private String engine;
  private double mileage;
  private boolean isStarted;
  private double speed;
}
`;

export const codeSnippetConstructor = `
public class Car {
  // Attributes
  private String model;
  private String color;
  private String engine;
  private double mileage;
  private boolean isStarted;
  private double speed;

  // Constructor
  public Car(String model, String color, String engine, double mileage) {
      this.model = model;
      this.color = color;
      this.engine = engine;
      this.mileage = mileage;
      this.isStarted = false;
      this.speed = 0.0;
  }
}`;

export const codeSnippetGetters = `
// Getters and setters for model attribute
public String getModel() {
    return model;
}

public void setModel(String model) {
    this.model = model;
}
// Similar methods for other attributes (color, engine, mileage, etc.)`;

export const codeSnippetMethod = `
public void start() {
  if (!isStarted) {
      System.out.println("Starting the " + color + " " + model);
      isStarted = true;
  } else {
      System.out.println("The " + color + " " + model + " is already started.");
  }
}
// Similar methods for other actions like accelerate, stop, applyBrake, etc.`;

export const codeSnippetFull = `
public class Car {
  // Attributes
  private String model;
  private String color;
  private String engine;
  private double mileage;
  private boolean isStarted;
  private double speed;

  // Constructor
  public Car(String model, String color, String engine, double mileage) {
      this.model = model;
      this.color = color;
      this.engine = engine;
      this.mileage = mileage;
      this.isStarted = false;
      this.speed = 0.0;
  }

  // Getters and setters
  public String getModel() {
      return model;
  }

  public void setModel(String model) {
      this.model = model;
  }

  public String getColor() {
      return color;
  }

  public void setColor(String color) {
      this.color = color;
  }

  public String getEngine() {
      return engine;
  }

  public void setEngine(String engine) {
      this.engine = engine;
  }

  public double getMileage() {
      return mileage;
  }

  public void setMileage(double mileage) {
      this.mileage = mileage;
  }

  // Methods
  public void start() {
      if (!isStarted) {
          System.out.println("Starting the " + color + " " + model);
          isStarted = true;
      } else {
          System.out.println("The " + color + " " + model + " is already started.");
      }
  }

  public void accelerate() {
      if (isStarted) {
          speed += 10; // Assuming a constant acceleration rate for simplicity
          System.out.println("Accelerating the " + color + " " + model + ". Current speed: " + speed + " mph");
      } else {
          System.out.println("Cannot accelerate. The " + color + " " + model + " is not started yet.");
      }
  }

  public void stop() {
      if (isStarted) {
          System.out.println("Stopping the " + color + " " + model);
          isStarted = false;
          speed = 0.0;
      } else {
          System.out.println("The " + color + " " + model + " is already stopped.");
      }
  }

  public void applyBrake() {
      if (isStarted && speed > 0) {
          System.out.println("Applying brake to the " + color + " " + model);
          speed -= 5; // Assuming a constant deceleration rate for simplicity
          System.out.println("Current speed after braking: " + speed + " mph");
      } else if (!isStarted) {
          System.out.println("Cannot apply brake. The " + color + " " + model + " is not started yet.");
      } else {
          System.out.println("The " + color + " " + model + " is already stopped. No need to apply brake.");
      }
  }
}`;

export const codeSnippetObject = `
public class Main {
  public static void main(String[] args) {
      // Creating a car object
      Car myCar = new Car("Toyota Corolla", "Blue", "V6", 20000);
      
      // Using car object
      myCar.start(); // Output: Starting the Blue Toyota Corolla
      // Similar actions like accelerate, stop, applyBrake, etc.
  }
}`;

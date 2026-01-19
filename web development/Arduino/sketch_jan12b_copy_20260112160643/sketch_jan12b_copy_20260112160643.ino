#include <Servo.h>

const int trigPin = 7;
const int echoPin = 8;
const int ledPin = 4;      // LED
const int buzzerPin = 5;   // Buzzer
const int servoPin = 6;   // Servo

Servo myServo;

void setup() {
  // initialize serial communication:
  Serial.begin(9600);

  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);
  pinMode(ledPin,OUTPUT);
  pinMode(buzzerPin,OUTPUT);

  myServo.attach(servoPin);
  myServo.write(0);   // Servo start position

}

void loop() {
  // establish variables for duration of the ping,
  // and the distance result in inches and centimeters:
  long duration, inches, cm;

  // The HC-SR04 is triggered by a HIGH pulse of 10 microseconds.
  // Give a short LOW pulse beforehand to ensure a clean HIGH pulse:
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Read the signal from the sensor:
  duration = pulseIn(echoPin, HIGH);

  // convert the time into a distance
  inches = microsecondsToInches(duration);
  cm = microsecondsToCentimeters(duration);
  cm = microsecondsToCentimeters(duration);

  Serial.print(inches);
  Serial.print(" in, ");
  Serial.print(cm);
  Serial.print(" cm");
  Serial.println();

  // -------- LED CONTROL --------
  if (cm > 0 && cm <= 20) {
    digitalWrite(ledPin, HIGH);
  } 

  else {
    digitalWrite(ledPin, LOW);
  }

  // -------- BUZZER CONTROL --------
  if (cm > 0 && cm <= 10) {
    tone(buzzerPin, 1000);
  } 
  
  else {
    noTone(buzzerPin);
  }
  
  // ----- SERVO CONTROLLER -----
  if (cm > 0 && cm <= 15) {
    myServo.write(90);
  }

  else {
    myServo.write(0);
  }
  delay(100);
}

long microsecondsToInches(long microseconds) {
  // According to Parallax’s datasheet for the PING))),
  // there are 74 microseconds per inch (i.e. sound travels at 1130 feet per second).
  // This gives the distance travelled by the ping, outbound and return,
  // so we divide by 2 to get the distance of the obstacle.
  return microseconds / 74 / 2;
}

long microsecondsToCentimeters(long microseconds) {
  // The speed of sound is 340 m/s or 29 microseconds per centimeter.
  // The ping travels out and back, so to find the distance of the object
  // we take half of the distance travelled.
  return microseconds / 29 / 2;
}


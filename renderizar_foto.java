import java.io.File;  // Import the File class
import java.io.IOException;  // Import the IOException class to handle errors
import java.util.Scanner;

public class renderizar_foto {
  public static void main(String[] args) {
    try {
      File myObj = new File("imagem/Spacedwog.png");
      Scanner myReader = new Scanner(myObj);
      if (myObj.createNewFile()) {
        System.out.println("File created: " + myObj.getName());
      }
      else {
        System.out.println("File already exists.");
        while (myReader.hasNextLine()) {
          System.out.println("Reading File");
          String data = myReader.nextLine();
          System.out.println(data);
        }
        myReader.close();

      }
    } catch (IOException e) {
      System.out.println("An error occurred: " + e.toString());
    }
  }
}
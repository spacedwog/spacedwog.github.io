import java.io.File;  // Import the File class
import java.io.IOException;  // Import the IOException class to handle errors
import java.util.NoSuchElementException;
import java.util.Scanner;

public class renderizar_foto {
  public static void main(String[] args) {
    try {
      File myObj = new File("imagem/Spacedwog.png");
      if (myObj.createNewFile()) {
        System.out.println("File created: " + myObj.getName());
      }
      else
      {
        System.out.println("File already exists.");
        try (Scanner myReader = new Scanner(myObj)) {
          System.out.println("Scan the file.");
          //byte codigo_bitcodal = myReader.nextByte();
          //System.err.println("Código Bitcodal" + codigo_bitcodal);
          //if (myReader.hasNextByte()) {
          //  System.out.println(myReader.nextByte());
          //} else {
          //  myReader.next();
          //}
          //while (myReader.hasNextLine()) {
          //  System.out.println("Reading File");
          //  String data = myReader.nextLine();
          //  System.out.println("Data: " + data);
          //}
        }
      }
    }
    catch (IOException | NoSuchElementException e) {
      System.out.println("An error occurred: " + e.toString());
    }
  }
}
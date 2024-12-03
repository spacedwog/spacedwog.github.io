import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class index {  
  public static void main(String[] args) {  
    try {
      File myObj = new File("usuario.txt");
        try (Scanner myReader = new Scanner(myObj)) {
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println("Dados: " + data);
            } }
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred: " + e);
    }
  }  
}
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class Client {
    public static void main(String[] args) {
        try {
            Registry registry = LocateRegistry.getRegistry("localhost");
            OperasiNilai obj = (OperasiNilai) registry.lookup("OperasiNilai");
            System.out.println("Nilai: " + obj.ambilNilai());
            System.out.println("Nama: " + obj.ambilNama());
            System.out.println("Nilai tambah: " + obj.tambahNilai(20));
        } catch (Exception e) {
            System.err.println("Client exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
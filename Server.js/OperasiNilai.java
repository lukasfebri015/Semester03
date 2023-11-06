import java.rmi.Remote;
import java.rmi.RemoteException;

public interface OperasiNilai extends Remote {
    public int ambilNilai() throws RemoteException;
    public int tambahNilai(int nilaiTambah) throws RemoteException;
    public String ambilNama() throws RemoteException;
}
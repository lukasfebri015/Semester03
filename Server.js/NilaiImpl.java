import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class NilaiImpl extends UnicastRemoteObject implements OperasiNilai {
    public NilaiImpl() throws RemoteException {
        super();
    }

    public int ambilNilai() throws RemoteException {
        return 80;
    }

    public int tambahNilai(int nilaiTambah) throws RemoteException {
        return nilaiTambah + 60;
    }

    public String ambilNama() throws RemoteException {
        return "John Doe";
    }
}
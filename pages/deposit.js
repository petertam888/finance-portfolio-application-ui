import AddDepositForm from '../components/AddDepositForm';

export default function deposit() {
    return (
      <div id="buy" style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Add Deposit </h2>
        <AddDepositForm />
      </div>
    );
  }
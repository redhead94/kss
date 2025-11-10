import { Container } from "../../components/Ui";
import DonateForm from "../../components/DonateForm";

export default function DonatePage() {
  return (
    <Container className="py-10">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Donate</h1>
      <p className="mb-6 max-w-2xl text-slate-600">
        Your contribution supports daily operations, youth programming, and community chesed.
      </p>
      <div className="max-w-md">
        <DonateForm />
      </div>
    </Container>
  );
}

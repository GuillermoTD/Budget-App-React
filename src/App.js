import { Button, Container, Stack } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
export default function App() {
  return (
    <>
      <Container className="my-3 mx-auto">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "flex",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "1rem",
            alignItems: "flex-start"
          }}
        >
          <BudgetCard
            name="Entertaiment"
            amount={100}
            max={500}
            defaultBg
          ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal></AddBudgetModal>
    </>
  );
}

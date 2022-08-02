import { Form, Modal, Button } from "react-bootstrap";
import { useRef } from "react";
import { useBudget } from "../Contexts/BudgetContext";

const AddExpenseModal = ({ show, handleClose, defaultBudgetID, setModal }) => {
  const { Header, Title, Body } = Modal;

  const { Group, Label, Control, Select, Option } = Form;

  const descriptionRef = useRef();

  const amountRef = useRef();

  const budgetIDRef = useRef();

  const { addExpense, budgets } = useBudget();

  const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      descriptionExpense: descriptionRef.current.value,
      amountExpense: Number(amountRef.current.value),
      budgetID: budgetIDRef.current.value
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Header closeButton>
            <Title>New Expense</Title>
          </Header>
          <Body>
            <Group className="mb-4" controlledId="Description">
              <Label>Description</Label>
              <Control ref={descriptionRef} type="text" required />
            </Group>
            <Group
              className="mb-3"
              controlledId="Amount
            "
            >
              <Label>Amount</Label>
              <Control
                ref={amountRef}
                type="number"
                required
                min={0}
                step={0.01}
              />
            </Group>

            <Group className="mb-4" controlledId="Max">
              <Label>Budget</Label>
              <Select
                type="text"
                defaultValue={defaultBudgetID}
                ref={budgetIDRef}
                required
              >
                <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                {budgets.map((budget) => (
                  <option key={budget.id} value={budget.id}>
                    {budget.budgetName}
                  </option>
                ))}
              </Select>
            </Group>

            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary" onClick={setModal}>
                Add
              </Button>
            </div>
          </Body>
        </Form>
      </Modal>
    </>
  );
};

export default AddExpenseModal;

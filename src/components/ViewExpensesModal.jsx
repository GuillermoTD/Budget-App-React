import { Modal, Button, Form, Stack } from "react-bootstrap";
import { useBudget } from "../Contexts/BudgetContext";
import { UNCATEGORIZED_BUDGET_ID } from "../Contexts/BudgetContext";

const ViewExpensesModal = ({ handleClose, budgetID }) => {
  const { Header, Title, Body } = Modal;

  const { Group, Label, Control, Select, Option } = Form;

  const { addExpense, budgets } = useBudget();

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetID
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((budget) => budget.id === budgetID);

  return (
    <>
      <Modal show={budgetID != null} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Header closeButton>
            <Title>
              <Stack direction="horizontal" gap="2">
                <div>Expenses - {budget?.budgetName}</div>
              </Stack>
            </Title>
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

export default ViewExpensesModal;

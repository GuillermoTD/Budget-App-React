import { Form, Modal, Button } from "react-bootstrap";
import { useRef } from "react";
import { useBudget } from "../Contexts/BudgetContext";

const AddBudgetModal = ({ show, handleClose }) => {
  const { Header, Title, Body } = Modal;
  const { Group, Label, Control } = Form;
  const { addBudget } = useBudget();
  const nameRef = useRef();
  const maxRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameAndMax = {
      budgetName: nameRef.current.value,
      maxSpending: parseFloat(maxRef.current.value)
    };
    addBudget(nameAndMax);
  };
  console.log(show);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Header closeButton>
            <Title>New Budget</Title>
          </Header>
          <Body>
            <Group className="mb-3" controlledId="Max">
              <Label>Name</Label>
              <Control ref={nameRef} type="text" required />
            </Group>
            <Group className="mb-3" controlledId="Maximum Spending">
              <Label>Maximum Spending</Label>
              <Control
                ref={maxRef}
                type="number"
                required
                min={0}
                step={0.01}
              />
            </Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary">
                Add
              </Button>
            </div>
          </Body>
        </Form>
      </Modal>
    </>
  );
};

export default AddBudgetModal;

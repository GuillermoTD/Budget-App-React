import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const BudgetCard = ({
  name,
  amount,
  max,
  defaultBg,
  onAddBudgetClick,
  hideButtons
}) => {
  const { Body, Title } = Card;

  const getProgressBarColor = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) return "success";
    if (ratio < 0.75) return "warning";
    return "danger";
  };

  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (defaultBg) {
    classNames.push("bg-light", "mb-2");
  }

  return (
    <Card className={classNames.join(" ")}>
      <Body className="w-4 px-4">
        <Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-1">
              {" "}
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarColor(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button variant="outline-primary" onClick={onAddBudgetClick}>
              Add Expense
            </Button>
            <Button variant="outline-secondary">View Expenses</Button>
          </Stack>
        )}
      </Body>
    </Card>
  );
};

export default BudgetCard;

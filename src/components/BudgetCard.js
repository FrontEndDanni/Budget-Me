import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";


export default function BudgetCard({ name, amount, max, gray, hideButtons, onAddExpenseClick, onViewExpensesClick }) {

    //function that changes the background color of the card 
    //depending on budget
    const classNames = []
    if (amount > max ) {
        classNames.push("bg-danger", "bg-opacity-10")
    } else if (gray) {
        classNames.push("bg-light")
    }

  return (
    <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)} 
                {max && 
                <span 
                className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)}
                </span>}
                </div>
            </Card.Title>

            {max && (
            <ProgressBar 
            className="rounded-pill" 
            variant={getProgressBarVariant(amount, max)}
            min={0} 
            max={max}
            now={amount}
            />
            )}
            
            {!hideButtons && <Stack 
            direction="horizontal" 
            gap="2"
            className="m-4">
                <Button 
                variant="primary"
                className="ms-auto"
                onClick={onAddExpenseClick}
                >
                    Add Expense
                </Button>
                <Button onClick={onViewExpensesClick}
                variant="outline-secondary"
                >
                    View Expenses
                </Button>
            </Stack>}

        </Card.Body>
    </Card>
  )
}

//this function changes color of progress bar depending on whether
//you are within your budget or not
function getProgressBarVariant(amount,max){
    const ratio = amount/max 
    if (ratio < .5) return "success"
    if (ratio < .75) return "warning"
    return "danger"
}

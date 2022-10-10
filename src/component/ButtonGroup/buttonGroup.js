import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

function Example(props) {
  const [rSelected, setRSelected] = useState(null);

  return (
    <div>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Radio 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Radio 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Radio 3
        </Button>
      </ButtonGroup>
      <p>Selected: {rSelected}</p>
    </div>
  );
}

export default Example;
import { Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { BaseModal, BaseModalProps } from "./BaseModal";
import FormControlLabel from "@mui/material/FormControlLabel";

interface ResetGameModalProps extends BaseModalProps {
  username: string;
  onClickButton: () => void;
}

export const ResetGameModal: React.FC<ResetGameModalProps> = ({
  username,
  isVisible,
  handleCloseModal,
  onClickButton,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <BaseModal isVisible={isVisible} handleCloseModal={handleCloseModal}>
      <p className="m-0 mb-4 text-black text-xl font-mono text-center">{`${username}, enough is enough.`}</p>
      <p className="text-black text-xs font-mono text-center">{`Some people have been abusing their inside knowledge a little too much. So I did a couple of things.`}</p>
      <ol>
        <li className="text-black text-xs font-mono m-0">{`I made this game impossible to win if your name is 'Mihir'`}</li>
        <li className="text-black text-xs font-mono m-0">{`Otherwise, you can win just by clicking the button below`}</li>
      </ol>
      {/* <div className="flex flex-row align-middle">
        <FormControlLabel
          sx={{
            color: "black",
            "& .MuiTypography-root": { fontSize: 14, fontFamily: "monospace" },
          }}
          control={
            <Checkbox
              value={isChecked}
              onClick={() => setIsChecked((v) => !v)}
            />
          }
          label="Check this box to win the game (PS it's impossible otherwise)"
        />
      </div> */}

      <>
        <p className="text-black text-md font-mono text-center">{`Good Choice.`}</p>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            onClickButton();
            handleCloseModal();
          }}
          className="my-2"
        >
          Win Game!
        </Button>
        <p className="text-black text-xs font-mono text-center">{`PS. There is no actual word today, don't bother guessing.`}</p>
        <p className="text-black text-xs font-mono text-center">{`PPS. No, Mihir can't see any of this.`}</p>
        <p className="text-black text-xs font-mono text-center">
          {`PPPS. @Rad I swear if you tell him we'll all know it was you and I'm ratting you out`}
          <i>{" immediately"}</i>
        </p>
      </>
    </BaseModal>
  );
};

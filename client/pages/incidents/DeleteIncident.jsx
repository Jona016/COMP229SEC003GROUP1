import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import auth from "../../lib/auth-helper.js";
import { remove } from "./api-incident.js";

export default function DeleteIncident(props) {
    const [open, setOpen] = useState(false);
    const jwt = auth.isAuthenticated();

    const clickButton = () => {
        setOpen(true);
    };

    const deleteIncident = () => {
        remove({
            incidentId: props.incident._id
        }, { t: jwt.token }).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOpen(false);
                props.onRemove(props.incident);
            }
        });
    };

    const handleRequestClose = () => {
        setOpen(false);
    };

    return (
        <span>
            <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleRequestClose}>
                <DialogTitle>{"Delete " + props.incident.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Confirm to delete the incident {props.incident.name}.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRequestClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={deleteIncident} color="secondary" autoFocus="autoFocus">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}

DeleteIncident.propTypes = {
    incident: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
};
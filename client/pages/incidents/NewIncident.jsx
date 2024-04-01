import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { create as createIncident } from "./api-incident.js"; // Import incident management API functions
import { Link, Navigate, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        margin: "auto",
        textAlign: "center",
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
    },
    error: {
        verticalAlign: "middle",
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
        fontSize: "1.2em",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    submit: {
        margin: "auto",
        marginBottom: theme.spacing(2),
    },
}));

export default function NewIncident() {
    const params = useParams();
    const classes = useStyles();
    const [values, setValues] = useState({
        name: "",
        description: "",
        severity: "",
        error: "",
        redirect: false,
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = () => {
        const incidentData = {
            name: values.name,
            description: values.description,
            severity: values.severity,
        };

        createIncident(incidentData).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, error: "", redirect: true });
            }
        });
    };

    if (values.redirect) {
        return <Navigate to="/incidents" />;
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        New Incident
                    </Typography>
                    <br />
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange("name")}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="multiline-flexible"
                        label="Description"
                        multiline
                        rows="2"
                        value={values.description}
                        onChange={handleChange("description")}
                        className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="severity"
                        label="Severity"
                        className={classes.textField}
                        value={values.severity}
                        onChange={handleChange("severity")}
                        margin="normal"
                    />
                    <br />
                    {values.error && (
                        <Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>
                                error
                            </Icon>
                            {values.error}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={clickSubmit}
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                    <Link to="/incidents" className={classes.submit}>
                        <Button variant="contained">Cancel</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

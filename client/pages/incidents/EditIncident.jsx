import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import auth from "../../lib/auth-helper.js";
import { makeStyles } from "@material-ui/core/styles";
import { read, update } from "./api-incident.js";
import { Link, useParams, Navigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "auto",
        textAlign: "center",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        maxWidth: 500,
        paddingBottom: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle,
        fontSize: "1.2em",
    },
    error: {
        verticalAlign: "middle",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    submit: {
        margin: "auto",
        marginBottom: theme.spacing(2),
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: "auto",
    },
}));

export default function EditIncident() {
    const params = useParams();
    const classes = useStyles();
    const [values, setValues] = useState({
        name: "",
        title: "",
        category: "",
        severity: "",
        description: "",
        comments: "",
        status: "",
        redirect: false,
        error: "",
    });
    const jwt = auth.isAuthenticated();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        read({
            incidentId: params.incidentId
        }, signal
        ).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    title: data.title,
                    category: data.category,
                    severity: severity,
                    description: data.description,
                    comments: data.comments,
                    status: data.status,
                });
            }
        });

        return function cleanup() {
            abortController.abort();
        };
    }, []);

    const clickSubmit = () => {
        const incidentData = {
            name: values.name,
            title: values.title,
            category: values.category,
            severity: values.severity,
            description: values.description,
            comments: values.comments,
            severity: values.severity,
            status: values.status,
        };

        update(params.incidentId, incidentData, jwt.token).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, redirect: true });
            }
        });
    };

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    if (values.redirect) {
        return <Navigate to={`/incidents/`} />;
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Edit Incident
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
                        id="title"
                        label="Title"
                        className={classes.textField}
                        value={values.title}
                        onChange={handleChange("title")}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="category"
                        label="Category"
                        className={classes.textField}
                        value={values.category}
                        onChange={handleChange("category")}
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
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows="3"
                        value={values.description}
                        onChange={handleChange("description")}
                        className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="comments"
                        label="Comments"
                        multiline
                        rows="3"
                        value={values.comments}
                        onChange={handleChange("comments")}
                        className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="status"
                        label="Status"
                        className={classes.textField}
                        value={values.status}
                        onChange={handleChange("status")}
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
                        Update
                    </Button>
                    <Link to={`/incidents/${params.incidentId}`} className={classes.submit}>
                        <Button variant="contained">Cancel</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

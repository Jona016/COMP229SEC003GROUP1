import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import auth from '../lib/auth-helper';
import { read, update } from './api-user.js';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: "0", 
    background: "#1bb1d6", 
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // marginTop: "70px"
    alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    width: '100%',
    maxWidth: 500, // Adjust the maximum width of the paper here
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[5],
    marginTop: "70px",
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em',
    textAlign: 'center'
  },
  error: {
    verticalAlign: 'middle',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  subheading: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
}));

// export default function EditProfile() {
//   const classes = useStyles();
//   const params = useParams();
//   const [values, setValues] = useState({
//     name: '',
//     password: '',
//     email: '',
//     admin: false, // Added state for admin role
//     error: '',
//     redirect: false,
//   });
//   const jwt = auth.isAuthenticated();

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;

//     read({ userId: params.userId }, signal)
//       .then((data) => {
//         if (data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({
//             ...values,
//             name: data.name,
//             email: data.email,
//             admin: data.admin, // Assuming the API returns the admin role
//           });
//         }
//       })
//       .catch((error) => console.error(error));

//     return function cleanup() {
//       abortController.abort();
//     };
//   }, [params.userId]);

//   const clickSubmit = () => {
//     const user = {
//       name: values.name,
//       email: values.email,
//       password: values.password,
//       admin: values.admin, // Include admin role in user object
//       userId: params.userId,
//     };

//     update(user, jwt.token)
//       .then((data) => {
//         if (data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({ ...values, redirect: true });
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   const handleChange = (name) => (event) => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   const handleAdminToggle = () => {
//     setValues({ ...values, admin: !values.admin }); // Toggle admin role
//   };

//   if (values.redirect) {
//     return <Navigate to={'/profile'} />;
//   }

//   return (
//     <div className={classes.root}>
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" className={classes.title}>
//           Edit Profile
//         </Typography>
//         <TextField
//           id="name"
//           label="Name"
//           className={classes.textField}
//           value={values.name}
//           onChange={handleChange('name')}
//           margin="normal"

//         />
//         <br />
//         <TextField
//           id="email"
//           type="email"
//           label="Email"
//           className={classes.textField}
//           value={values.email}
//           onChange={handleChange('email')}
//           margin="normal"
//         />
//         <br />
//         <TextField
//           id="password"
//           type="password"
//           label="Password"
//           className={classes.textField}
//           value={values.password}
//           onChange={handleChange('password')}
//           margin="normal"
//         />
//         <br />
//         {values.error && (
//           <Typography component="p" color="error">
//             <Icon color="error" className={classes.error}>
//               error
//             </Icon>
//             {values.error}
//           </Typography>
//         )}
//       </CardContent>
//       <CardActions>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={clickSubmit}
//           className={classes.submit}
//         >
//           Submit
//         </Button>
//       </CardActions>
//     </Card>
//     </div>
//   );
// }

// Import statements...

export default function EditProfile() {
  const classes = useStyles();
  const params = useParams();
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    admin: false, // Added state for admin role
    error: '',
    redirect: false,
  });
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read({ userId: params.userId }, signal)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            admin: data.admin, // Assuming the API returns the admin role
          });
        }
      })
      .catch((error) => console.error(error));

    return function cleanup() {
      abortController.abort();
    };
  }, [params.userId]);

  const clickSubmit = () => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
      admin: values.admin, // Include admin role in user object
      userId: params.userId,
    };

    update(user, jwt.token)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, redirect: true });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleAdminToggle = () => {
    // Only allow admin to toggle admin role
    if (auth.isAdmin()) {
      setValues({ ...values, admin: !values.admin }); // Toggle admin role
    }
  };

  if (values.redirect) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <br />
          <TextField
            id="email"
            type="email"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
          />
          <br />
          <FormControlLabel
            control={
              <Switch
                checked={values.admin}
                onChange={handleAdminToggle}
                color="primary"
              />
            }
            label="Admin"
          />
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
        </CardActions>
      </Card>
    </div>
  );
}

import React, {useState, useEffect} from "react";
import {Button, ErrorMessage, InputBlock, InputGroup, Strong} from "./register-form.style";
import registerUser  from "../../services/register-dev.service";
import {SERVICE_STATUS} from "../../services/helpers";
import { PushSpinner } from "react-spinners-kit";
import {Flex} from "../../global.style";


const RegisterFormComponent = ({addDev}) => {
    const [githubUsername, setGithubUsername] = useState("");
    const [techs, setTechs] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [errors, setErrors] = useState({
        githubUsername: {isValid: false, touched: false, errorMessage: ""},
        techs: {isValid: false, touched: false, errorMessage: ""},
        latitude: {isValid: false, touched: false, errorMessage: ""},
        longitude: {isValid: false, touched: false, errorMessage: ""}
    });
    const [isLoading, setIsLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);
    const isFormValid = () => {
        let formValid = true;
        for (let key in errors) {
            if (errors.hasOwnProperty((key))) {
                const field = errors[key];
                if (!field.isValid) {
                    formValid = false;
                    break;
                }
            }
        }
        return formValid
    };
    const createUser = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsLoading(true);
           const res = await registerUser({githubUsername, longitude, latitude, techs});
            setIsLoading(false);
            if (res.type === SERVICE_STATUS.OK) {
               setGithubUsername("");
               setTechs("");
                addDev(res.data.dev)
           } else {
               setServerErrors(["Something went wrong"])
           }
        }

    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                onLatitudeChange(position.coords.latitude, true, false);
                onLongitudeChange(position.coords.longitude, true, false);
            },
            err => {
                console.log(err)
                onLatitudeChange(latitude, true, false);
                onLongitudeChange(longitude, true, false);
            },
            {
                timeout: 30000
            }
        );
        onGithubUsernameChange(githubUsername, true, false);
        onTechsChange(techs, true, false);
        console.log(isFormValid())
        //eslint-disable-next-line
    }, []);
    const updateErrors = (key, isValid, errorMessage = "", touched=true) => {
        const errorsUpdate = {...errors};
        errorsUpdate[key].isValid = isValid;
        errorsUpdate[key].errorMessage = errorMessage;
        errorsUpdate[key].touched = touched;
        setErrors(errorsUpdate)
    };
    const onGithubUsernameChange = (githubUsername, validateField = false, touched=true) => {
        if (validateField) {
            if (githubUsername.length < 6 || githubUsername.length > 16) {
                updateErrors("githubUsername", false, "The field Github Username needs to be between 6 and 16 characters.", touched)
            } else {
                updateErrors("githubUsername", true, touched)
            }
        }
        setGithubUsername(githubUsername)
    };
    const onLatitudeChange = (latitude, validateField = false, touched=true) => {
        if (validateField) {
            if (!latitude) {
                updateErrors("latitude", false, "The field latitude is required", touched)
            } else {
                updateErrors("latitude", true, touched)
            }
        }
        setLatitude(latitude)
    };
    const onLongitudeChange = (longitude, validateField = false, touched=true) => {
        if (validateField) {
            if (!longitude) {
                updateErrors("longitude", false, "The field longitude is required", touched)
            } else {
                updateErrors("longitude", true, touched)
            }
        }
        setLongitude(longitude)
    };
    const onTechsChange = (techs, validateField = false, touched=true) => {
        if (validateField) {
            if (techs.length < 2 || techs.length > 24) {
                updateErrors("techs", false, "The field techs needs to be between 2 and 24 characters.", touched)
            } else {
                updateErrors("techs", true, touched)
            }
        }
        setTechs(techs)
    };
    return (
        <>
            <h4>
                <Strong>Join us</Strong>
            </h4>
            <form>
                <InputBlock isValid={errors.githubUsername.isValid} show={errors.githubUsername.touched}>
                    <label htmlFor="github_username">Github Username</label>
                    <input
                        name="github_username"
                        id="github_username"
                        value={githubUsername}
                        onChange={e => onGithubUsernameChange(e.target.value)}
                        onBlur={e => onGithubUsernameChange(e.target.value, true)}
                    />
                    <ErrorMessage>{errors.githubUsername.errorMessage}</ErrorMessage>
                </InputBlock>
                <InputBlock isValid={errors.techs.isValid} show={errors.techs.touched}>
                    <label htmlFor="techs">Techs most used</label>
                    <input
                        name="techs"
                        id="techs"
                        value={techs}
                        onChange={e => onTechsChange(e.target.value)}
                        onBlur={e => onTechsChange(e.target.value, true)}
                    />
                    <ErrorMessage>{errors.techs.errorMessage}</ErrorMessage>

                </InputBlock>
                <InputGroup>
                    <InputBlock isValid={errors.latitude.isValid} show={errors.latitude.touched}>
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            type={"number"}
                            name="latitude"
                            id="latitude"
                            value={latitude}
                            required
                            onBlur={e => onLatitudeChange(e.target.value, true)}
                            onChange={e => onLatitudeChange(e.target.value)}
                        />
                        <ErrorMessage>{errors.latitude.errorMessage}</ErrorMessage>

                    </InputBlock>
                    <InputBlock isValid={errors.longitude.isValid} show={errors.longitude.touched}>
                        <label htmlFor="longitude">Longitude</label>
                        <input
                            type={"number"}
                            name="longitude"
                            id="longitude"
                            value={longitude}
                            required
                            onBlur={e => onLongitudeChange(e.target.value, true)}
                            onChange={e => onLongitudeChange(e.target.value)}
                        />
                        <ErrorMessage>{errors.longitude.errorMessage}</ErrorMessage>

                    </InputBlock>
                </InputGroup>
                {serverErrors.map(
                    err => (
                        <ErrorMessage>{err}</ErrorMessage>
                    )
                )}
                {isLoading ?  <Flex justifyContent={"center"} alignItems={"center"}><PushSpinner
                    size={30}
                    color="#686769"
                    loading={true}
                /></Flex>:
                <Button onClick={createUser} disabled={!isFormValid()}>Registrar</Button>
                }
            </form>
        </>
    );
};

export default RegisterFormComponent;

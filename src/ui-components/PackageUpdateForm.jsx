/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Package } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PackageUpdateForm(props) {
  const {
    id: idProp,
    package,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    size: "",
    cost: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [size, setSize] = React.useState(initialValues.size);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = packageRecord
      ? { ...initialValues, ...packageRecord }
      : initialValues;
    setName(cleanValues.name);
    setSize(cleanValues.size);
    setCost(cleanValues.cost);
    setErrors({});
  };
  const [packageRecord, setPackageRecord] = React.useState(package);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Package, idProp) : package;
      setPackageRecord(record);
    };
    queryData();
  }, [idProp, package]);
  React.useEffect(resetStateValues, [packageRecord]);
  const validations = {
    name: [],
    size: [],
    cost: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          size,
          cost,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Package.copyOf(packageRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PackageUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              size,
              cost,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              size: value,
              cost,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              size,
              cost: value,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || package)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || package) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateCarInput = {
  id?: string | null;
  name: string;
  description: string;
  patent: string;
};

export type ModelCarConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  patent?: ModelStringInput | null;
  and?: Array<ModelCarConditionInput | null> | null;
  or?: Array<ModelCarConditionInput | null> | null;
  not?: ModelCarConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCarInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  patent?: string | null;
};

export type DeleteCarInput = {
  id?: string | null;
};

export type CreateAppraisalCInput = {
  id?: string | null;
  name: string;
};

export type ModelAppraisalCConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalCConditionInput | null> | null;
  or?: Array<ModelAppraisalCConditionInput | null> | null;
  not?: ModelAppraisalCConditionInput | null;
};

export type UpdateAppraisalCInput = {
  id: string;
  name?: string | null;
};

export type DeleteAppraisalCInput = {
  id?: string | null;
};

export type CreatePhotoCarInput = {
  id?: string | null;
  url: string;
  photoCarAppraisalId?: string | null;
};

export type ModelPhotoCarConditionInput = {
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoCarConditionInput | null> | null;
  or?: Array<ModelPhotoCarConditionInput | null> | null;
  not?: ModelPhotoCarConditionInput | null;
};

export type UpdatePhotoCarInput = {
  id: string;
  url?: string | null;
  photoCarAppraisalId?: string | null;
};

export type DeletePhotoCarInput = {
  id?: string | null;
};

export type CreatePhotoDocInput = {
  id?: string | null;
  url: string;
  photoDocAppraisalId?: string | null;
};

export type ModelPhotoDocConditionInput = {
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoDocConditionInput | null> | null;
  or?: Array<ModelPhotoDocConditionInput | null> | null;
  not?: ModelPhotoDocConditionInput | null;
};

export type UpdatePhotoDocInput = {
  id: string;
  url?: string | null;
  photoDocAppraisalId?: string | null;
};

export type DeletePhotoDocInput = {
  id?: string | null;
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  patent?: ModelStringInput | null;
  and?: Array<ModelCarFilterInput | null> | null;
  or?: Array<ModelCarFilterInput | null> | null;
  not?: ModelCarFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAppraisalCFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalCFilterInput | null> | null;
  or?: Array<ModelAppraisalCFilterInput | null> | null;
  not?: ModelAppraisalCFilterInput | null;
};

export type ModelPhotoCarFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoCarFilterInput | null> | null;
  or?: Array<ModelPhotoCarFilterInput | null> | null;
  not?: ModelPhotoCarFilterInput | null;
};

export type ModelPhotoDocFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoDocFilterInput | null> | null;
  or?: Array<ModelPhotoDocFilterInput | null> | null;
  not?: ModelPhotoDocFilterInput | null;
};

export type CreateCarMutation = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCarMutation = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCarMutation = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppraisalCMutation = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppraisalCMutation = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppraisalCMutation = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePhotoDocMutation = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoDocMutation = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoDocMutation = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCarQuery = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCarsQuery = {
  __typename: "ModelCarConnection";
  items: Array<{
    __typename: "Car";
    id: string;
    name: string;
    description: string;
    patent: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppraisalCQuery = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppraisalCsQuery = {
  __typename: "ModelAppraisalCConnection";
  items: Array<{
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhotoCarQuery = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotoCarsQuery = {
  __typename: "ModelPhotoCarConnection";
  items: Array<{
    __typename: "PhotoCar";
    id: string;
    url: string;
    appraisal: {
      __typename: "AppraisalC";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhotoDocQuery = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotoDocsQuery = {
  __typename: "ModelPhotoDocConnection";
  items: Array<{
    __typename: "PhotoDoc";
    id: string;
    url: string;
    appraisal: {
      __typename: "AppraisalC";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCarSubscription = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCarSubscription = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCarSubscription = {
  __typename: "Car";
  id: string;
  name: string;
  description: string;
  patent: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppraisalCSubscription = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppraisalCSubscription = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppraisalCSubscription = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos_cars: {
    __typename: "ModelPhotoCarConnection";
    items: Array<{
      __typename: "PhotoCar";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoDocConnection";
    items: Array<{
      __typename: "PhotoDoc";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePhotoDocSubscription = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoDocSubscription = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoDocSubscription = {
  __typename: "PhotoDoc";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCarConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoDocConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCar(
    input: CreateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<CreateCarMutation> {
    const statement = `mutation CreateCar($input: CreateCarInput!, $condition: ModelCarConditionInput) {
        createCar(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCarMutation>response.data.createCar;
  }
  async UpdateCar(
    input: UpdateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<UpdateCarMutation> {
    const statement = `mutation UpdateCar($input: UpdateCarInput!, $condition: ModelCarConditionInput) {
        updateCar(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCarMutation>response.data.updateCar;
  }
  async DeleteCar(
    input: DeleteCarInput,
    condition?: ModelCarConditionInput
  ): Promise<DeleteCarMutation> {
    const statement = `mutation DeleteCar($input: DeleteCarInput!, $condition: ModelCarConditionInput) {
        deleteCar(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCarMutation>response.data.deleteCar;
  }
  async CreateAppraisalC(
    input: CreateAppraisalCInput,
    condition?: ModelAppraisalCConditionInput
  ): Promise<CreateAppraisalCMutation> {
    const statement = `mutation CreateAppraisalC($input: CreateAppraisalCInput!, $condition: ModelAppraisalCConditionInput) {
        createAppraisalC(input: $input, condition: $condition) {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppraisalCMutation>response.data.createAppraisalC;
  }
  async UpdateAppraisalC(
    input: UpdateAppraisalCInput,
    condition?: ModelAppraisalCConditionInput
  ): Promise<UpdateAppraisalCMutation> {
    const statement = `mutation UpdateAppraisalC($input: UpdateAppraisalCInput!, $condition: ModelAppraisalCConditionInput) {
        updateAppraisalC(input: $input, condition: $condition) {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppraisalCMutation>response.data.updateAppraisalC;
  }
  async DeleteAppraisalC(
    input: DeleteAppraisalCInput,
    condition?: ModelAppraisalCConditionInput
  ): Promise<DeleteAppraisalCMutation> {
    const statement = `mutation DeleteAppraisalC($input: DeleteAppraisalCInput!, $condition: ModelAppraisalCConditionInput) {
        deleteAppraisalC(input: $input, condition: $condition) {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppraisalCMutation>response.data.deleteAppraisalC;
  }
  async CreatePhotoCar(
    input: CreatePhotoCarInput,
    condition?: ModelPhotoCarConditionInput
  ): Promise<CreatePhotoCarMutation> {
    const statement = `mutation CreatePhotoCar($input: CreatePhotoCarInput!, $condition: ModelPhotoCarConditionInput) {
        createPhotoCar(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePhotoCarMutation>response.data.createPhotoCar;
  }
  async UpdatePhotoCar(
    input: UpdatePhotoCarInput,
    condition?: ModelPhotoCarConditionInput
  ): Promise<UpdatePhotoCarMutation> {
    const statement = `mutation UpdatePhotoCar($input: UpdatePhotoCarInput!, $condition: ModelPhotoCarConditionInput) {
        updatePhotoCar(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePhotoCarMutation>response.data.updatePhotoCar;
  }
  async DeletePhotoCar(
    input: DeletePhotoCarInput,
    condition?: ModelPhotoCarConditionInput
  ): Promise<DeletePhotoCarMutation> {
    const statement = `mutation DeletePhotoCar($input: DeletePhotoCarInput!, $condition: ModelPhotoCarConditionInput) {
        deletePhotoCar(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePhotoCarMutation>response.data.deletePhotoCar;
  }
  async CreatePhotoDoc(
    input: CreatePhotoDocInput,
    condition?: ModelPhotoDocConditionInput
  ): Promise<CreatePhotoDocMutation> {
    const statement = `mutation CreatePhotoDoc($input: CreatePhotoDocInput!, $condition: ModelPhotoDocConditionInput) {
        createPhotoDoc(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePhotoDocMutation>response.data.createPhotoDoc;
  }
  async UpdatePhotoDoc(
    input: UpdatePhotoDocInput,
    condition?: ModelPhotoDocConditionInput
  ): Promise<UpdatePhotoDocMutation> {
    const statement = `mutation UpdatePhotoDoc($input: UpdatePhotoDocInput!, $condition: ModelPhotoDocConditionInput) {
        updatePhotoDoc(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePhotoDocMutation>response.data.updatePhotoDoc;
  }
  async DeletePhotoDoc(
    input: DeletePhotoDocInput,
    condition?: ModelPhotoDocConditionInput
  ): Promise<DeletePhotoDocMutation> {
    const statement = `mutation DeletePhotoDoc($input: DeletePhotoDocInput!, $condition: ModelPhotoDocConditionInput) {
        deletePhotoDoc(input: $input, condition: $condition) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePhotoDocMutation>response.data.deletePhotoDoc;
  }
  async GetCar(id: string): Promise<GetCarQuery> {
    const statement = `query GetCar($id: ID!) {
        getCar(id: $id) {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCarQuery>response.data.getCar;
  }
  async ListCars(
    filter?: ModelCarFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCarsQuery> {
    const statement = `query ListCars($filter: ModelCarFilterInput, $limit: Int, $nextToken: String) {
        listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            patent
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCarsQuery>response.data.listCars;
  }
  async GetAppraisalC(id: string): Promise<GetAppraisalCQuery> {
    const statement = `query GetAppraisalC($id: ID!) {
        getAppraisalC(id: $id) {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppraisalCQuery>response.data.getAppraisalC;
  }
  async ListAppraisalCs(
    filter?: ModelAppraisalCFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppraisalCsQuery> {
    const statement = `query ListAppraisalCs($filter: ModelAppraisalCFilterInput, $limit: Int, $nextToken: String) {
        listAppraisalCs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppraisalCsQuery>response.data.listAppraisalCs;
  }
  async GetPhotoCar(id: string): Promise<GetPhotoCarQuery> {
    const statement = `query GetPhotoCar($id: ID!) {
        getPhotoCar(id: $id) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPhotoCarQuery>response.data.getPhotoCar;
  }
  async ListPhotoCars(
    filter?: ModelPhotoCarFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotoCarsQuery> {
    const statement = `query ListPhotoCars($filter: ModelPhotoCarFilterInput, $limit: Int, $nextToken: String) {
        listPhotoCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            appraisal {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPhotoCarsQuery>response.data.listPhotoCars;
  }
  async GetPhotoDoc(id: string): Promise<GetPhotoDocQuery> {
    const statement = `query GetPhotoDoc($id: ID!) {
        getPhotoDoc(id: $id) {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPhotoDocQuery>response.data.getPhotoDoc;
  }
  async ListPhotoDocs(
    filter?: ModelPhotoDocFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotoDocsQuery> {
    const statement = `query ListPhotoDocs($filter: ModelPhotoDocFilterInput, $limit: Int, $nextToken: String) {
        listPhotoDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            appraisal {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPhotoDocsQuery>response.data.listPhotoDocs;
  }
  OnCreateCarListener: Observable<OnCreateCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCar {
        onCreateCar {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCarSubscription>;

  OnUpdateCarListener: Observable<OnUpdateCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCar {
        onUpdateCar {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCarSubscription>;

  OnDeleteCarListener: Observable<OnDeleteCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCar {
        onDeleteCar {
          __typename
          id
          name
          description
          patent
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCarSubscription>;

  OnCreateAppraisalCListener: Observable<
    OnCreateAppraisalCSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppraisalC {
        onCreateAppraisalC {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppraisalCSubscription>;

  OnUpdateAppraisalCListener: Observable<
    OnUpdateAppraisalCSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppraisalC {
        onUpdateAppraisalC {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppraisalCSubscription>;

  OnDeleteAppraisalCListener: Observable<
    OnDeleteAppraisalCSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppraisalC {
        onDeleteAppraisalC {
          __typename
          id
          name
          photos_cars {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          photos_docs {
            __typename
            items {
              __typename
              id
              url
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppraisalCSubscription>;

  OnCreatePhotoCarListener: Observable<
    OnCreatePhotoCarSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhotoCar {
        onCreatePhotoCar {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePhotoCarSubscription>;

  OnUpdatePhotoCarListener: Observable<
    OnUpdatePhotoCarSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhotoCar {
        onUpdatePhotoCar {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePhotoCarSubscription>;

  OnDeletePhotoCarListener: Observable<
    OnDeletePhotoCarSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhotoCar {
        onDeletePhotoCar {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePhotoCarSubscription>;

  OnCreatePhotoDocListener: Observable<
    OnCreatePhotoDocSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhotoDoc {
        onCreatePhotoDoc {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePhotoDocSubscription>;

  OnUpdatePhotoDocListener: Observable<
    OnUpdatePhotoDocSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhotoDoc {
        onUpdatePhotoDoc {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePhotoDocSubscription>;

  OnDeletePhotoDocListener: Observable<
    OnDeletePhotoDocSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhotoDoc {
        onDeletePhotoDoc {
          __typename
          id
          url
          appraisal {
            __typename
            id
            name
            photos_cars {
              __typename
              nextToken
            }
            photos_docs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePhotoDocSubscription>;
}

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

export type CreateAppraisalInput = {
  id?: string | null;
  name: string;
};

export type ModelAppraisalConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalConditionInput | null> | null;
  or?: Array<ModelAppraisalConditionInput | null> | null;
  not?: ModelAppraisalConditionInput | null;
};

export type UpdateAppraisalInput = {
  id: string;
  name?: string | null;
};

export type DeleteAppraisalInput = {
  id?: string | null;
};

export type CreatePhotoInput = {
  id?: string | null;
  url: string;
  photoPhotosCarId?: string | null;
  photoPhotosDocsId?: string | null;
};

export type ModelPhotoConditionInput = {
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoConditionInput | null> | null;
  or?: Array<ModelPhotoConditionInput | null> | null;
  not?: ModelPhotoConditionInput | null;
};

export type UpdatePhotoInput = {
  id: string;
  url?: string | null;
  photoPhotosCarId?: string | null;
  photoPhotosDocsId?: string | null;
};

export type DeletePhotoInput = {
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

export type ModelAppraisalFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalFilterInput | null> | null;
  or?: Array<ModelAppraisalFilterInput | null> | null;
  not?: ModelAppraisalFilterInput | null;
};

export type ModelPhotoFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoFilterInput | null> | null;
  or?: Array<ModelPhotoFilterInput | null> | null;
  not?: ModelPhotoFilterInput | null;
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

export type CreateAppraisalMutation = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type UpdateAppraisalMutation = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type DeleteAppraisalMutation = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type CreatePhotoMutation = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoMutation = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoMutation = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
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

export type GetAppraisalQuery = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type ListAppraisalsQuery = {
  __typename: "ModelAppraisalConnection";
  items: Array<{
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhotoQuery = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotosQuery = {
  __typename: "ModelPhotoConnection";
  items: Array<{
    __typename: "Photo";
    id: string;
    url: string;
    photosCar: {
      __typename: "Appraisal";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    photosDocs: {
      __typename: "Appraisal";
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

export type OnCreateAppraisalSubscription = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type OnUpdateAppraisalSubscription = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type OnDeleteAppraisalSubscription = {
  __typename: "Appraisal";
  id: string;
  name: string;
  photosCar: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photosDocs: {
    __typename: "ModelPhotoConnection";
    items: Array<{
      __typename: "Photo";
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

export type OnCreatePhotoSubscription = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoSubscription = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoSubscription = {
  __typename: "Photo";
  id: string;
  url: string;
  photosCar: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  photosDocs: {
    __typename: "Appraisal";
    id: string;
    name: string;
    photosCar: {
      __typename: "ModelPhotoConnection";
      nextToken: string | null;
    } | null;
    photosDocs: {
      __typename: "ModelPhotoConnection";
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
  async CreateAppraisal(
    input: CreateAppraisalInput,
    condition?: ModelAppraisalConditionInput
  ): Promise<CreateAppraisalMutation> {
    const statement = `mutation CreateAppraisal($input: CreateAppraisalInput!, $condition: ModelAppraisalConditionInput) {
        createAppraisal(input: $input, condition: $condition) {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
    return <CreateAppraisalMutation>response.data.createAppraisal;
  }
  async UpdateAppraisal(
    input: UpdateAppraisalInput,
    condition?: ModelAppraisalConditionInput
  ): Promise<UpdateAppraisalMutation> {
    const statement = `mutation UpdateAppraisal($input: UpdateAppraisalInput!, $condition: ModelAppraisalConditionInput) {
        updateAppraisal(input: $input, condition: $condition) {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
    return <UpdateAppraisalMutation>response.data.updateAppraisal;
  }
  async DeleteAppraisal(
    input: DeleteAppraisalInput,
    condition?: ModelAppraisalConditionInput
  ): Promise<DeleteAppraisalMutation> {
    const statement = `mutation DeleteAppraisal($input: DeleteAppraisalInput!, $condition: ModelAppraisalConditionInput) {
        deleteAppraisal(input: $input, condition: $condition) {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
    return <DeleteAppraisalMutation>response.data.deleteAppraisal;
  }
  async CreatePhoto(
    input: CreatePhotoInput,
    condition?: ModelPhotoConditionInput
  ): Promise<CreatePhotoMutation> {
    const statement = `mutation CreatePhoto($input: CreatePhotoInput!, $condition: ModelPhotoConditionInput) {
        createPhoto(input: $input, condition: $condition) {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
    return <CreatePhotoMutation>response.data.createPhoto;
  }
  async UpdatePhoto(
    input: UpdatePhotoInput,
    condition?: ModelPhotoConditionInput
  ): Promise<UpdatePhotoMutation> {
    const statement = `mutation UpdatePhoto($input: UpdatePhotoInput!, $condition: ModelPhotoConditionInput) {
        updatePhoto(input: $input, condition: $condition) {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
    return <UpdatePhotoMutation>response.data.updatePhoto;
  }
  async DeletePhoto(
    input: DeletePhotoInput,
    condition?: ModelPhotoConditionInput
  ): Promise<DeletePhotoMutation> {
    const statement = `mutation DeletePhoto($input: DeletePhotoInput!, $condition: ModelPhotoConditionInput) {
        deletePhoto(input: $input, condition: $condition) {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
    return <DeletePhotoMutation>response.data.deletePhoto;
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
  async GetAppraisal(id: string): Promise<GetAppraisalQuery> {
    const statement = `query GetAppraisal($id: ID!) {
        getAppraisal(id: $id) {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
    return <GetAppraisalQuery>response.data.getAppraisal;
  }
  async ListAppraisals(
    filter?: ModelAppraisalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppraisalsQuery> {
    const statement = `query ListAppraisals($filter: ModelAppraisalFilterInput, $limit: Int, $nextToken: String) {
        listAppraisals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
    return <ListAppraisalsQuery>response.data.listAppraisals;
  }
  async GetPhoto(id: string): Promise<GetPhotoQuery> {
    const statement = `query GetPhoto($id: ID!) {
        getPhoto(id: $id) {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
    return <GetPhotoQuery>response.data.getPhoto;
  }
  async ListPhotos(
    filter?: ModelPhotoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotosQuery> {
    const statement = `query ListPhotos($filter: ModelPhotoFilterInput, $limit: Int, $nextToken: String) {
        listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            photosCar {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            photosDocs {
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
    return <ListPhotosQuery>response.data.listPhotos;
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

  OnCreateAppraisalListener: Observable<
    OnCreateAppraisalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppraisal {
        onCreateAppraisal {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
  ) as Observable<OnCreateAppraisalSubscription>;

  OnUpdateAppraisalListener: Observable<
    OnUpdateAppraisalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppraisal {
        onUpdateAppraisal {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
  ) as Observable<OnUpdateAppraisalSubscription>;

  OnDeleteAppraisalListener: Observable<
    OnDeleteAppraisalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppraisal {
        onDeleteAppraisal {
          __typename
          id
          name
          photosCar {
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
          photosDocs {
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
  ) as Observable<OnDeleteAppraisalSubscription>;

  OnCreatePhotoListener: Observable<OnCreatePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhoto {
        onCreatePhoto {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
  ) as Observable<OnCreatePhotoSubscription>;

  OnUpdatePhotoListener: Observable<OnUpdatePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhoto {
        onUpdatePhoto {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
  ) as Observable<OnUpdatePhotoSubscription>;

  OnDeletePhotoListener: Observable<OnDeletePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhoto {
        onDeletePhoto {
          __typename
          id
          url
          photosCar {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          photosDocs {
            __typename
            id
            name
            photosCar {
              __typename
              nextToken
            }
            photosDocs {
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
  ) as Observable<OnDeletePhotoSubscription>;
}

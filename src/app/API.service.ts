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

export type CreatePhotoCInput = {
  id?: string | null;
  url: string;
  photoCAppraisalId?: string | null;
};

export type ModelPhotoCConditionInput = {
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoCConditionInput | null> | null;
  or?: Array<ModelPhotoCConditionInput | null> | null;
  not?: ModelPhotoCConditionInput | null;
};

export type UpdatePhotoCInput = {
  id: string;
  url?: string | null;
  photoCAppraisalId?: string | null;
};

export type DeletePhotoCInput = {
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

export type ModelPhotoCFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoCFilterInput | null> | null;
  or?: Array<ModelPhotoCFilterInput | null> | null;
  not?: ModelPhotoCFilterInput | null;
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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

export type CreatePhotoCMutation = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoCMutation = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoCMutation = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhotoCQuery = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotoCsQuery = {
  __typename: "ModelPhotoCConnection";
  items: Array<{
    __typename: "PhotoC";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
      id: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  photos_docs: {
    __typename: "ModelPhotoCConnection";
    items: Array<{
      __typename: "PhotoC";
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

export type OnCreatePhotoCSubscription = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoCSubscription = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoCSubscription = {
  __typename: "PhotoC";
  id: string;
  url: string;
  appraisal: {
    __typename: "AppraisalC";
    id: string;
    name: string;
    photos_cars: {
      __typename: "ModelPhotoCConnection";
      nextToken: string | null;
    } | null;
    photos_docs: {
      __typename: "ModelPhotoCConnection";
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
  async CreatePhotoC(
    input: CreatePhotoCInput,
    condition?: ModelPhotoCConditionInput
  ): Promise<CreatePhotoCMutation> {
    const statement = `mutation CreatePhotoC($input: CreatePhotoCInput!, $condition: ModelPhotoCConditionInput) {
        createPhotoC(input: $input, condition: $condition) {
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
    return <CreatePhotoCMutation>response.data.createPhotoC;
  }
  async UpdatePhotoC(
    input: UpdatePhotoCInput,
    condition?: ModelPhotoCConditionInput
  ): Promise<UpdatePhotoCMutation> {
    const statement = `mutation UpdatePhotoC($input: UpdatePhotoCInput!, $condition: ModelPhotoCConditionInput) {
        updatePhotoC(input: $input, condition: $condition) {
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
    return <UpdatePhotoCMutation>response.data.updatePhotoC;
  }
  async DeletePhotoC(
    input: DeletePhotoCInput,
    condition?: ModelPhotoCConditionInput
  ): Promise<DeletePhotoCMutation> {
    const statement = `mutation DeletePhotoC($input: DeletePhotoCInput!, $condition: ModelPhotoCConditionInput) {
        deletePhotoC(input: $input, condition: $condition) {
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
    return <DeletePhotoCMutation>response.data.deletePhotoC;
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
  async GetPhotoC(id: string): Promise<GetPhotoCQuery> {
    const statement = `query GetPhotoC($id: ID!) {
        getPhotoC(id: $id) {
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
    return <GetPhotoCQuery>response.data.getPhotoC;
  }
  async ListPhotoCs(
    filter?: ModelPhotoCFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotoCsQuery> {
    const statement = `query ListPhotoCs($filter: ModelPhotoCFilterInput, $limit: Int, $nextToken: String) {
        listPhotoCs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListPhotoCsQuery>response.data.listPhotoCs;
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

  OnCreatePhotoCListener: Observable<OnCreatePhotoCSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhotoC {
        onCreatePhotoC {
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
  ) as Observable<OnCreatePhotoCSubscription>;

  OnUpdatePhotoCListener: Observable<OnUpdatePhotoCSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhotoC {
        onUpdatePhotoC {
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
  ) as Observable<OnUpdatePhotoCSubscription>;

  OnDeletePhotoCListener: Observable<OnDeletePhotoCSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhotoC {
        onDeletePhotoC {
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
  ) as Observable<OnDeletePhotoCSubscription>;
}

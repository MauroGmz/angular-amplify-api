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

export type CreatePhotoCarInput = {
  id?: string | null;
  url: string;
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
};

export type DeletePhotoCarInput = {
  id?: string | null;
};

export type CreateAppraisalBInput = {
  id?: string | null;
  name: string;
};

export type ModelAppraisalBConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalBConditionInput | null> | null;
  or?: Array<ModelAppraisalBConditionInput | null> | null;
  not?: ModelAppraisalBConditionInput | null;
};

export type UpdateAppraisalBInput = {
  id: string;
  name?: string | null;
};

export type DeleteAppraisalBInput = {
  id?: string | null;
};

export type CreatePhotoBInput = {
  id?: string | null;
  appraisalBID: string;
  url: string;
};

export type ModelPhotoBConditionInput = {
  appraisalBID?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoBConditionInput | null> | null;
  or?: Array<ModelPhotoBConditionInput | null> | null;
  not?: ModelPhotoBConditionInput | null;
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

export type UpdatePhotoBInput = {
  id: string;
  appraisalBID?: string | null;
  url?: string | null;
};

export type DeletePhotoBInput = {
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

export type ModelPhotoCarFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoCarFilterInput | null> | null;
  or?: Array<ModelPhotoCarFilterInput | null> | null;
  not?: ModelPhotoCarFilterInput | null;
};

export type ModelAppraisalBFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAppraisalBFilterInput | null> | null;
  or?: Array<ModelAppraisalBFilterInput | null> | null;
  not?: ModelAppraisalBFilterInput | null;
};

export type ModelPhotoBFilterInput = {
  id?: ModelIDInput | null;
  appraisalBID?: ModelIDInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelPhotoBFilterInput | null> | null;
  or?: Array<ModelPhotoBFilterInput | null> | null;
  not?: ModelPhotoBFilterInput | null;
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

export type CreatePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoCarMutation = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppraisalBMutation = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppraisalBMutation = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppraisalBMutation = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePhotoBMutation = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePhotoBMutation = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePhotoBMutation = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppraisalCMutation = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos: {
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
  photos: {
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
  photos: {
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
    photos: {
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
    photos: {
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
    photos: {
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

export type GetPhotoCarQuery = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotoCarsQuery = {
  __typename: "ModelPhotoCarConnection";
  items: Array<{
    __typename: "PhotoCar";
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppraisalBQuery = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppraisalBsQuery = {
  __typename: "ModelAppraisalBConnection";
  items: Array<{
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPhotoBQuery = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPhotoBsQuery = {
  __typename: "ModelPhotoBConnection";
  items: Array<{
    __typename: "PhotoB";
    id: string;
    appraisalBID: string;
    url: string;
    appraisalB: {
      __typename: "AppraisalB";
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

export type GetAppraisalCQuery = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos: {
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
    photos: {
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
    photos: {
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

export type OnCreatePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoCarSubscription = {
  __typename: "PhotoCar";
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppraisalBSubscription = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppraisalBSubscription = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppraisalBSubscription = {
  __typename: "AppraisalB";
  id: string;
  name: string;
  photos: {
    __typename: "ModelPhotoBConnection";
    items: Array<{
      __typename: "PhotoB";
      id: string;
      appraisalBID: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePhotoBSubscription = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePhotoBSubscription = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePhotoBSubscription = {
  __typename: "PhotoB";
  id: string;
  appraisalBID: string;
  url: string;
  appraisalB: {
    __typename: "AppraisalB";
    id: string;
    name: string;
    photos: {
      __typename: "ModelPhotoBConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppraisalCSubscription = {
  __typename: "AppraisalC";
  id: string;
  name: string;
  photos: {
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
  photos: {
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
  photos: {
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
    photos: {
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
    photos: {
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
    photos: {
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
  async CreatePhotoCar(
    input: CreatePhotoCarInput,
    condition?: ModelPhotoCarConditionInput
  ): Promise<CreatePhotoCarMutation> {
    const statement = `mutation CreatePhotoCar($input: CreatePhotoCarInput!, $condition: ModelPhotoCarConditionInput) {
        createPhotoCar(input: $input, condition: $condition) {
          __typename
          id
          url
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
  async CreateAppraisalB(
    input: CreateAppraisalBInput,
    condition?: ModelAppraisalBConditionInput
  ): Promise<CreateAppraisalBMutation> {
    const statement = `mutation CreateAppraisalB($input: CreateAppraisalBInput!, $condition: ModelAppraisalBConditionInput) {
        createAppraisalB(input: $input, condition: $condition) {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
    return <CreateAppraisalBMutation>response.data.createAppraisalB;
  }
  async UpdateAppraisalB(
    input: UpdateAppraisalBInput,
    condition?: ModelAppraisalBConditionInput
  ): Promise<UpdateAppraisalBMutation> {
    const statement = `mutation UpdateAppraisalB($input: UpdateAppraisalBInput!, $condition: ModelAppraisalBConditionInput) {
        updateAppraisalB(input: $input, condition: $condition) {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
    return <UpdateAppraisalBMutation>response.data.updateAppraisalB;
  }
  async DeleteAppraisalB(
    input: DeleteAppraisalBInput,
    condition?: ModelAppraisalBConditionInput
  ): Promise<DeleteAppraisalBMutation> {
    const statement = `mutation DeleteAppraisalB($input: DeleteAppraisalBInput!, $condition: ModelAppraisalBConditionInput) {
        deleteAppraisalB(input: $input, condition: $condition) {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
    return <DeleteAppraisalBMutation>response.data.deleteAppraisalB;
  }
  async CreatePhotoB(
    input: CreatePhotoBInput,
    condition?: ModelPhotoBConditionInput
  ): Promise<CreatePhotoBMutation> {
    const statement = `mutation CreatePhotoB($input: CreatePhotoBInput!, $condition: ModelPhotoBConditionInput) {
        createPhotoB(input: $input, condition: $condition) {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
    return <CreatePhotoBMutation>response.data.createPhotoB;
  }
  async UpdatePhotoB(
    input: UpdatePhotoBInput,
    condition?: ModelPhotoBConditionInput
  ): Promise<UpdatePhotoBMutation> {
    const statement = `mutation UpdatePhotoB($input: UpdatePhotoBInput!, $condition: ModelPhotoBConditionInput) {
        updatePhotoB(input: $input, condition: $condition) {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
    return <UpdatePhotoBMutation>response.data.updatePhotoB;
  }
  async DeletePhotoB(
    input: DeletePhotoBInput,
    condition?: ModelPhotoBConditionInput
  ): Promise<DeletePhotoBMutation> {
    const statement = `mutation DeletePhotoB($input: DeletePhotoBInput!, $condition: ModelPhotoBConditionInput) {
        deletePhotoB(input: $input, condition: $condition) {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
    return <DeletePhotoBMutation>response.data.deletePhotoB;
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
          photos {
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
          photos {
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
          photos {
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
            photos {
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
            photos {
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
            photos {
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
  async GetPhotoCar(id: string): Promise<GetPhotoCarQuery> {
    const statement = `query GetPhotoCar($id: ID!) {
        getPhotoCar(id: $id) {
          __typename
          id
          url
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
  async GetAppraisalB(id: string): Promise<GetAppraisalBQuery> {
    const statement = `query GetAppraisalB($id: ID!) {
        getAppraisalB(id: $id) {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
    return <GetAppraisalBQuery>response.data.getAppraisalB;
  }
  async ListAppraisalBs(
    filter?: ModelAppraisalBFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppraisalBsQuery> {
    const statement = `query ListAppraisalBs($filter: ModelAppraisalBFilterInput, $limit: Int, $nextToken: String) {
        listAppraisalBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            photos {
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
    return <ListAppraisalBsQuery>response.data.listAppraisalBs;
  }
  async GetPhotoB(id: string): Promise<GetPhotoBQuery> {
    const statement = `query GetPhotoB($id: ID!) {
        getPhotoB(id: $id) {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
    return <GetPhotoBQuery>response.data.getPhotoB;
  }
  async ListPhotoBs(
    filter?: ModelPhotoBFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotoBsQuery> {
    const statement = `query ListPhotoBs($filter: ModelPhotoBFilterInput, $limit: Int, $nextToken: String) {
        listPhotoBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appraisalBID
            url
            appraisalB {
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
    return <ListPhotoBsQuery>response.data.listPhotoBs;
  }
  async GetAppraisalC(id: string): Promise<GetAppraisalCQuery> {
    const statement = `query GetAppraisalC($id: ID!) {
        getAppraisalC(id: $id) {
          __typename
          id
          name
          photos {
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
            photos {
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
            photos {
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

  OnCreatePhotoCarListener: Observable<
    OnCreatePhotoCarSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhotoCar {
        onCreatePhotoCar {
          __typename
          id
          url
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePhotoCarSubscription>;

  OnCreateAppraisalBListener: Observable<
    OnCreateAppraisalBSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppraisalB {
        onCreateAppraisalB {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
  ) as Observable<OnCreateAppraisalBSubscription>;

  OnUpdateAppraisalBListener: Observable<
    OnUpdateAppraisalBSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppraisalB {
        onUpdateAppraisalB {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
  ) as Observable<OnUpdateAppraisalBSubscription>;

  OnDeleteAppraisalBListener: Observable<
    OnDeleteAppraisalBSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppraisalB {
        onDeleteAppraisalB {
          __typename
          id
          name
          photos {
            __typename
            items {
              __typename
              id
              appraisalBID
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
  ) as Observable<OnDeleteAppraisalBSubscription>;

  OnCreatePhotoBListener: Observable<OnCreatePhotoBSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhotoB {
        onCreatePhotoB {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
  ) as Observable<OnCreatePhotoBSubscription>;

  OnUpdatePhotoBListener: Observable<OnUpdatePhotoBSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhotoB {
        onUpdatePhotoB {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
  ) as Observable<OnUpdatePhotoBSubscription>;

  OnDeletePhotoBListener: Observable<OnDeletePhotoBSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhotoB {
        onDeletePhotoB {
          __typename
          id
          appraisalBID
          url
          appraisalB {
            __typename
            id
            name
            photos {
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
  ) as Observable<OnDeletePhotoBSubscription>;

  OnCreateAppraisalCListener: Observable<
    OnCreateAppraisalCSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppraisalC {
        onCreateAppraisalC {
          __typename
          id
          name
          photos {
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
          photos {
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
          photos {
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
            photos {
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
            photos {
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
            photos {
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

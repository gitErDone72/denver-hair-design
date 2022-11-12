/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateStylist: OnCreateStylistSubscription;
  onUpdateStylist: OnUpdateStylistSubscription;
  onDeleteStylist: OnDeleteStylistSubscription;
};

export type CreateStylistInput = {
  id?: string | null;
  name: string;
  description: string;
  phone: string;
};

export type ModelStylistConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelStylistConditionInput | null> | null;
  or?: Array<ModelStylistConditionInput | null> | null;
  not?: ModelStylistConditionInput | null;
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

export type Stylist = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStylistInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  phone?: string | null;
};

export type DeleteStylistInput = {
  id: string;
};

export type ModelStylistFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelStylistFilterInput | null> | null;
  or?: Array<ModelStylistFilterInput | null> | null;
  not?: ModelStylistFilterInput | null;
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

export type ModelStylistConnection = {
  __typename: "ModelStylistConnection";
  items: Array<Stylist | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionStylistFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStylistFilterInput | null> | null;
  or?: Array<ModelSubscriptionStylistFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateStylistMutation = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStylistMutation = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStylistMutation = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type GetStylistQuery = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type ListStylistsQuery = {
  __typename: "ModelStylistConnection";
  items: Array<{
    __typename: "Stylist";
    id: string;
    name: string;
    description: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateStylistSubscription = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStylistSubscription = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStylistSubscription = {
  __typename: "Stylist";
  id: string;
  name: string;
  description: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStylist(
    input: CreateStylistInput,
    condition?: ModelStylistConditionInput
  ): Promise<CreateStylistMutation> {
    const statement = `mutation CreateStylist($input: CreateStylistInput!, $condition: ModelStylistConditionInput) {
        createStylist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          phone
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
    return <CreateStylistMutation>response.data.createStylist;
  }
  async UpdateStylist(
    input: UpdateStylistInput,
    condition?: ModelStylistConditionInput
  ): Promise<UpdateStylistMutation> {
    const statement = `mutation UpdateStylist($input: UpdateStylistInput!, $condition: ModelStylistConditionInput) {
        updateStylist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          phone
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
    return <UpdateStylistMutation>response.data.updateStylist;
  }
  async DeleteStylist(
    input: DeleteStylistInput,
    condition?: ModelStylistConditionInput
  ): Promise<DeleteStylistMutation> {
    const statement = `mutation DeleteStylist($input: DeleteStylistInput!, $condition: ModelStylistConditionInput) {
        deleteStylist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          phone
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
    return <DeleteStylistMutation>response.data.deleteStylist;
  }
  async GetStylist(id: string): Promise<GetStylistQuery> {
    const statement = `query GetStylist($id: ID!) {
        getStylist(id: $id) {
          __typename
          id
          name
          description
          phone
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
    return <GetStylistQuery>response.data.getStylist;
  }
  async ListStylists(
    filter?: ModelStylistFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStylistsQuery> {
    const statement = `query ListStylists($filter: ModelStylistFilterInput, $limit: Int, $nextToken: String) {
        listStylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            phone
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
    return <ListStylistsQuery>response.data.listStylists;
  }
  OnCreateStylistListener(
    filter?: ModelSubscriptionStylistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStylist">>
  > {
    const statement = `subscription OnCreateStylist($filter: ModelSubscriptionStylistFilterInput) {
        onCreateStylist(filter: $filter) {
          __typename
          id
          name
          description
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStylist">>
    >;
  }

  OnUpdateStylistListener(
    filter?: ModelSubscriptionStylistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStylist">>
  > {
    const statement = `subscription OnUpdateStylist($filter: ModelSubscriptionStylistFilterInput) {
        onUpdateStylist(filter: $filter) {
          __typename
          id
          name
          description
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStylist">>
    >;
  }

  OnDeleteStylistListener(
    filter?: ModelSubscriptionStylistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStylist">>
  > {
    const statement = `subscription OnDeleteStylist($filter: ModelSubscriptionStylistFilterInput) {
        onDeleteStylist(filter: $filter) {
          __typename
          id
          name
          description
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStylist">>
    >;
  }
}

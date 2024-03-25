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
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
  onCreateStylist: OnCreateStylistSubscription;
  onUpdateStylist: OnUpdateStylistSubscription;
  onDeleteStylist: OnDeleteStylistSubscription;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
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

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type CreateStylistInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
};

export type ModelStylistConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  headShot?: ModelStringInput | null;
  socialMedia?: ModelStringInput | null;
  socialMediaLink?: ModelStringInput | null;
  bookingMethod?: ModelStringInput | null;
  bookingLink?: ModelStringInput | null;
  and?: Array<ModelStylistConditionInput | null> | null;
  or?: Array<ModelStylistConditionInput | null> | null;
  not?: ModelStylistConditionInput | null;
};

export type Stylist = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStylistInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  headShot?: string | null;
  socialMedia?: string | null;
  socialMediaLink?: string | null;
  bookingMethod?: string | null;
  bookingLink?: string | null;
};

export type DeleteStylistInput = {
  id: string;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
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

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelStylistFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  headShot?: ModelStringInput | null;
  socialMedia?: ModelStringInput | null;
  socialMediaLink?: ModelStringInput | null;
  bookingMethod?: ModelStringInput | null;
  bookingLink?: ModelStringInput | null;
  and?: Array<ModelStylistFilterInput | null> | null;
  or?: Array<ModelStylistFilterInput | null> | null;
  not?: ModelStylistFilterInput | null;
};

export type ModelStylistConnection = {
  __typename: "ModelStylistConnection";
  items: Array<Stylist | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
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

export type ModelSubscriptionStylistFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  headShot?: ModelSubscriptionStringInput | null;
  socialMedia?: ModelSubscriptionStringInput | null;
  socialMediaLink?: ModelSubscriptionStringInput | null;
  bookingMethod?: ModelSubscriptionStringInput | null;
  bookingLink?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStylistFilterInput | null> | null;
  or?: Array<ModelSubscriptionStylistFilterInput | null> | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateStylistMutation = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStylistMutation = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStylistMutation = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetStylistQuery = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type ListStylistsQuery = {
  __typename: "ModelStylistConnection";
  items: Array<{
    __typename: "Stylist";
    id: string;
    firstName: string;
    lastName: string;
    headShot: string;
    socialMedia: string;
    socialMediaLink: string;
    bookingMethod: string;
    bookingLink: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStylistSubscription = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStylistSubscription = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStylistSubscription = {
  __typename: "Stylist";
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  socialMedia: string;
  socialMediaLink: string;
  bookingMethod: string;
  bookingLink: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
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
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
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
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
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
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateStylist(
    input: CreateStylistInput,
    condition?: ModelStylistConditionInput
  ): Promise<CreateStylistMutation> {
    const statement = `mutation CreateStylist($input: CreateStylistInput!, $condition: ModelStylistConditionInput) {
        createStylist(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
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
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
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
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetStylist(id: string): Promise<GetStylistQuery> {
    const statement = `query GetStylist($id: ID!) {
        getStylist(id: $id) {
          __typename
          id
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
            firstName
            lastName
            headShot
            socialMedia
            socialMediaLink
            bookingMethod
            bookingLink
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
  OnCreateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onCreateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onUpdateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onDeleteRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
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
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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
          firstName
          lastName
          headShot
          socialMedia
          socialMediaLink
          bookingMethod
          bookingLink
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

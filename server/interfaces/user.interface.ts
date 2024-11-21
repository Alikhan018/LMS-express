import { UserType } from "@prisma/client";

export interface CreateUserInput {
  fName: string;
  lName: string;
  mailingAddress: string;
  email: string;
  phoneNo: number;
  DOB: Date;
  secondaryPhone: number;
  profilePicture: string;
  userType: UserType;
}

export interface UpdateUserInput {
  fName?: string;
  lName?: string;
  mailingAddress?: string;
  email?: string;
  phoneNo?: number;
  DOB?: Date;
  secondaryPhone?: number;
  profilePicture?: string;
  userType?: UserType;
}

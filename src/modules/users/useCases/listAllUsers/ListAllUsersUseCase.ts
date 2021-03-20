import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User was not found");
    }
    const isAnAdminUser = user.admin;
    if (isAnAdminUser) {
      const users = this.usersRepository.list();
      return users;
    }
    throw new Error(
      "Access denied. Allowed only to users with admin privilegies"
    );
  }
}

export { ListAllUsersUseCase };

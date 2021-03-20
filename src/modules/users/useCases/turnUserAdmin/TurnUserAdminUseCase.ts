import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      return this.usersRepository.turnAdmin(user);
    }
    throw new Error("User id was not found");
  }
}

export { TurnUserAdminUseCase };

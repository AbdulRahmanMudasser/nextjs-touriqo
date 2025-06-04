import { dataService } from "./data.service";
import { networkService } from "./network.service";

class UserService {
  constructor() {}

}

// Export a single instance (Singleton pattern)
export const userService = new UserService();
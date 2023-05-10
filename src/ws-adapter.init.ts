import {INestApplication} from "@nestjs/common";
import {UserConnectionAdapter} from "./ws.adapter";
import {UserService} from "./user.service";

export const initWsAdapters = (app: INestApplication): INestApplication => {
    const userService = app.get(UserService);

    app.useWebSocketAdapter(
        new UserConnectionAdapter(app, userService),
    );

    return app;
};
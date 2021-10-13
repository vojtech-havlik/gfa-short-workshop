import {
  move,
  sleep,
  turnLeft,
  turnRight,
  turnLightOn,
  turnLightOff,
  isInFrontOfWall,
  isRoomLightsOn
} from "./private/config";

export async function commandsForKarelTheFox() {
  for (let i = 0; i < 4; i++) {
    while (!isInFrontOfWall()) {
      if (isRoomLightsOn()) {
        await turnLightOff();
      }
      await move();
    }
    turnRight();
  }

  /*
  for (let i = 0; i < 15; i++) {
    await move();
  }*/
}

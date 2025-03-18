function combat(health, damage) {
    health -= damage;
  if (health < 0) {
    return 0
  } return health;
}
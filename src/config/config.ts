interface Config {
  LOCAL_DATABASE_URL: string;
  DATABASE_URL: string;
  DIRECT_URL: string;
  HASH_SALT_ROUNDS: number;
}

const config: Config = {
  LOCAL_DATABASE_URL: process.env.LOCAL_DATABASE_URL || '',
  DATABASE_URL: process.env.DATABASE_URL || '',
  DIRECT_URL: process.env.DIRECT_URL || '',
  HASH_SALT_ROUNDS: parseInt(process.env.HASH_SALT_ROUNDS) || 10, // valor padrão de 10 se não estiver definido
};

export default config;

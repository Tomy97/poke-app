import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { getPokemonsAction } from "../../redux/actions/PokemonActions";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Grid from "@mui/material/Unstable_Grid2";

export const HomeView = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const dispatch = useAppDispatch();
  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {pokemons.map((pokemon) => (
        <Grid xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={pokemon.name}
              alt={pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeView;

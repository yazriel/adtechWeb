import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import React, { useState, useEffect } from 'react'

export default function Loader2 () {
  const [oppos, getOppos] = useState([])

  const urlOppo = 'http://localhost:8080/oppo';
  
  useEffect(() => {
    fetch(urlOppo, {
      // crossDomain:true,
      method: 'GET',
    }).then((res) => res.json())
      .then((res) => {
        getOppos(res)
      })
  }, [])
  return (
    <Container maxWidth="md" component="main">
    <Grid container spacing={5} alignItems="flex-end">
      {oppos.map((oppo) => (
        // Enterprise card is full width at sm breakpoint
        <Grid
          item
          key={oppo.id}
          xs={12}
          // YAZR - should we always set width of last element ?!
          // sm={oppo.title === 'Enterprise' ? 12 : 6}
          sm={oppo.id === 103 ? 12 : 6}
          md={4}
        >
          <Card>
            <CardHeader
              title={oppo.id}
              subheader="oppo.subheader"
              titleTypographyProps={{ align: 'center' }}
              action={oppo.id === 102 ? <StarIcon /> : null}
              subheaderTypographyProps={{
                align: 'center',
              }}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                }}
              >
                <Typography variant="h4" color="text.secondary">
                  Payout:&nbsp; 
                </Typography>
                <Typography variant="h3" color="text.primary">
                  ${oppo.payout}
                </Typography>
              </Box>
              <ul>
              <Typography
                    component="li"
                    variant="h5"
                    align="center"
                    key={oppo.cost}
                  >
                  Cost: ${oppo.cost}
              </Typography>
              </ul>
{/*
              <ul>
                {oppo.description.map((line) => (
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={line}
                  >
                    {line}
                  </Typography>
                ))}
              </ul>
                */}
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="{oppo.buttonVariant as 'outlined' | 'contained'}"
              >
                "oppo.buttonText"
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}
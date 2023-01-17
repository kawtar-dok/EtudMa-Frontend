import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Filieres" subtitle="La liste des Filieres" />
      <Box
        display="grid"
        alignItems="center"
        gridTemplateColumns="repeat(6, 1fr)"
        justifyContent="space-between"
        gridAutoRows="140px"
        gap="20px"
        p="12px"
        ml="200px"
        mt="100px"
      >
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              List Filieres
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
             
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
               
              </Box>
              <Box color={colors.grey[100]}>
              {transaction.user}
              </Box>
              <Box
               
                p="5px 10px"
                borderRadius="4px"
              >
                <Button type="submit" color="secondary" variant="contained">
                Show
              </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Invoices;

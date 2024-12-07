import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Box, Card, CardContent, Typography, Grid, Button, Avatar, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LoupeIcon from '@mui/icons-material/Loupe';


// Tema oluşturma
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

// Örnek veri
const data = [
  {
    logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg",
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0,
    usdValue: 0,
  },
  {
    logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg",
    symbol: "ETH",
    name: "Ethereum",
    amount: 0,
    usdValue: 0,
  },
  {
    logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCBNB--big.svg",
    symbol: "BNB",
    name: "Binance Coin",
    amount: 0,
    usdValue: 0,
  },
  {
    logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT--big.svg",
    symbol: "USDT",
    name: "Tether",
    amount: 0,
    usdValue: 0,
  },
  {
    logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCADA--big.svg",
    symbol: "ADA",
    name: "Cardano",
    amount: 0,
    usdValue: 0,
  },
];

const AccountEquityCard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Arama moduna girildi mi?

  // Arama filtreleme fonksiyonu
  const filteredData = data.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchFocus = () => {
    setIsSearching(true); // Arama kutusuna tıklanması ile arama moduna geç
  };

  const handleCancelSearch = () => {
    setSearchQuery(""); // Arama kutusunu sıfırla
    setIsSearching(false); // Arama modunu kapat
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box  sx={{  }}>
      <Box  m={2} justifyContent= "space-between"
          alignItems= "center"
          display="flex">

<PersonOutlinedIcon  sx={{ fontSize: '1.6rem', color: 'black'  }} />


            <Typography   
            sx={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              
              background: 'linear-gradient(90deg, #031340, #08AEEA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
           Wallet

           </Typography>

  

           <AdminPanelSettingsOutlinedIcon    sx={{ fontSize: '1.6rem', color: 'black' }} />

      

      
       
              </Box>
        {/* İlk Kart */}
        <Card sx={{ borderRadius: 3, mx: "auto", mt: 4,  m: 2 }}>
          <CardContent>
            {/* Total Account Equity */}
            <Typography
              variant="subtitle2"
              sx={{ color: "grey.600" }}
              align="center"
              gutterBottom
            >
              Total Account Equity
            </Typography>
            <Typography mt={-1}               variant="subtitle1"
 align="center" gutterBottom>
              0 USDT
            </Typography>
            <Typography mt={-1}
              variant="subtitle2"
              align="center"
              color="text.secondary"
            >
              = $0
            </Typography>

            {/* PNL Details */}
            <Grid container spacing={1} sx={{ mt: 2 }}>
              {/* Left Box - Today's PNL */}
              <Grid item xs={6}>
                <Box
                  sx={{
                    textAlign: "center",
                    borderRight: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "grey.600" }}
                  >
                    Today's PNL
                  </Typography>
                  <Typography                     variant="subtitle1"
                  >0 USDT</Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "green" }}
                  >
                    0%
                  </Typography>
                </Box>
              </Grid>

              {/* Right Box - 7-Day PNL */}
              <Grid item xs={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "grey.600" }}
                  >
                    7-Day PNL
                  </Typography>
                  <Typography                     variant="subtitle1"
                  >0 USDT</Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "green" }}
                  >
                    0%
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                mb: 0,
              }}
            >
              <Button
                startIcon={<LoupeIcon />}

                variant="contained"
                color="primary"
                size="small"
                sx={{
                  textTransform: "none",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                }}
              >
                Deposit
              </Button>
              <Button
                              startIcon={<ArrowCircleUpIcon />}

                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,

                }}
              >
                Withdraw
              </Button>
              <Button
                                            startIcon={<              PublishedWithChangesIcon
                                              />}

                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,

                }}
              >
                Transfer
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* İkinci Kart - Asset List */}
        <Card sx={{ borderRadius: 3, mx: "auto", p: 1, m: 2 }}>
          <CardContent>
            {/* Başlık ve Arama Kutusu */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              {/* Arama Kutusunun Görünümü */}
              {!isSearching && (
                <Typography variant="subtitle1">
                  Assets List
                </Typography>
              )}
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus} // Arama kutusuna tıklanınca genişler
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "grey.600" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: isSearching ? "100%" : 150, // Arama kutusu genişlemesi
                  transition: "width 0.3s ease",
                }}
              />
              {isSearching && (
                <Button
                  onClick={handleCancelSearch}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.875rem",
                    color: "primary.main",
                    marginLeft: 2,
                  }}
                >
                  Cancel
                </Button>
              )}
            </Box>

            {/* Dinamik Item Listesi */}
            {filteredData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    index < filteredData.length - 1 ? "1px solid #ddd" : "none",
                  py: 1,
                }}
              >
                {/* Sol Kısım: Logo ve Yazılar */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={item.logo}
                    alt={item.symbol}
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1">{item.symbol}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.name}
                    </Typography>
                  </Box>
                </Box>

                {/* Sağ Kısım: Rakamlar */}
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="subtitle1">{item.amount}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    = {item.usdValue} USD
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default AccountEquityCard;

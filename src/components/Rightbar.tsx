import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Tharushi De Silva"
            src="https://www.cybersrilanka.com/wp-content/uploads/2019/09/Shanudrie-Priyasad-19.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i0.wp.com/www.trendceylon.com/wp-content/uploads/2021/11/Shalani-Tharaka-trendceylon.com-211121064351-6.jpg?fit=683%2C1024&ssl=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://timesofindia.indiatimes.com/thumb/msid-68836829,width-800,height-600,resizemode-4/68836829.jpg?imglength=47562"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://64.media.tumblr.com/e390325dc005c71b1682ae5916de9ea1/tumblr_o8n99sV0Jh1smyw17o4_250.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i0.wp.com/short-biography.com/wp-content/uploads/nikki-bella/Nikki-Bella.jpg?w=1252&ssl=1"
          />
          <Avatar
            alt="Tharushi De Silva"
            src="https://www.cybersrilanka.com/wp-content/uploads/2019/09/Shanudrie-Priyasad-19.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i0.wp.com/www.trendceylon.com/wp-content/uploads/2021/11/Shalani-Tharaka-trendceylon.com-211121064351-6.jpg?fit=683%2C1024&ssl=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://timesofindia.indiatimes.com/thumb/msid-68836829,width-800,height-600,resizemode-4/68836829.jpg?imglength=47562"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://64.media.tumblr.com/e390325dc005c71b1682ae5916de9ea1/tumblr_o8n99sV0Jh1smyw17o4_250.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i0.wp.com/short-biography.com/wp-content/uploads/nikki-bella/Nikki-Bella.jpg?w=1252&ssl=1"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://i0.wp.com/short-biography.com/wp-content/uploads/nikki-bella/Nikki-Bella.jpg?w=1252&ssl=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i0.wp.com/short-biography.com/wp-content/uploads/nikki-bella/Nikki-Bella.jpg?w=1252&ssl=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i0.wp.com/short-biography.com/wp-content/uploads/nikki-bella/Nikki-Bella.jpg?w=1252&ssl=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://www.cybersrilanka.com/wp-content/uploads/2019/09/Shanudrie-Priyasad-19.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://www.cybersrilanka.com/wp-content/uploads/2019/09/Shanudrie-Priyasad-19.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://www.cybersrilanka.com/wp-content/uploads/2019/09/Shanudrie-Priyasad-19.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Type from 'dan-styles/Typography.scss';
import FileUpload from '@material-ui/icons/CloudUpload';
import Rating from '../Rating/Rating';
import { NavLink } from 'react-router-dom';
import styles from './cardStyle-jss';

class ProductCardStudent extends React.Component {
  render() {
    const {
      classes,
      discount,
      soldout,
      thumbnail,
      name,
      desc,
      ratting,
      price,
      prevPrice,
      list,
      detailOpen,
      addToCart,
      width,
    } = this.props;
    return (
      <Card
        className={classNames(
          classes.cardProduct,
          isWidthUp('sm', width) && list ? classes.cardList : ''
        )}
      >
        {/* <div className={classes.status}>
          {discount !== '' && (
            <Chip label={'Discount ' + discount} className={classes.chipDiscount} />
          )}
          {soldout && (
            <Chip label="Sold Out" className={classes.chipSold} />
          )}
        </div> */}
        <CardMedia
          className={classes.mediaProduct}
          image={thumbnail}
          title={name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          {/* {!soldout && (
            <Tooltip title="Add to cart" placement="top">
              <Fab onClick={addToCart} size="small" color="secondary" aria-label="add" className={classes.buttonAdd}>
                <AddShoppingCart />
              </Fab>
            </Tooltip>
          )} */}
          <Typography
            noWrap
            gutterBottom
            variant="h5"
            className={classes.title}
            component="h2"
          >
            {name}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {desc}
          </Typography>
          {/* <div className={classes.ratting}>
            <Rating value={ratting} max={5} readOnly />
          </div> */}
        </CardContent>
        <CardActions className={classes.price}>
          {/* <Typography variant="h5">
            <span>
              $
              {price}
            </span>
          </Typography> */}
          {/* {prevPrice > 0 && (
            <Typography variant="caption" component="h5">
              <span className={Type.lineThrought}>
                $
                {prevPrice}
              </span>
            </Typography>
          )} */}
          <div className={classes.rightAction}>
            {/* <Button size="small" variant="outlined" color="secondary" onClick={detailOpen}>
              Hello
            </Button> */}
            {/* <Button variant="contained" component="span" id="raised-button-file" className={classes.button}>
                  Upload
            </Button> */}
            {/* <div>
              <input accept="image/*" className={classes.inputUpload} id="icon-button-file" type="file" style={{display: 'none'}}/> */}
            {/* eslint-disable-next-line */}
            {/* <label htmlFor="icon-button-file">
                <IconButton color="primary" id="uploadBtnIcon" className={classes.button} component="span">
                  <FileUpload />
                </IconButton>
              </label>
            </div> */}
            <div>
              {/*
              <input
                accept="image/*"
                className={classes.inputUpload}
                id="raised-button-file"
                multiple
                type="file"
                style={{ display: 'none' }}
              />
              */}
              {/* eslint-disable-next-line */}
              {/*
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  component="span"
                  id="raised-button-file"
                  className={classes.button}
                  color="primary"
                >
                  Start Quiz
                </Button>
              </label>
              */}
              {/* <Button variant="outlined" color="primary">Start</Button> */}
              <Button variant="outlined" color="primary">
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none' }}>Start</NavLink>
              </Button>
            </div>
            {!soldout && (
              <Tooltip title="Add to cart" placement="top">
                <IconButton
                  color="secondary"
                  onClick={addToCart}
                  className={classes.buttonAddList}
                >
                  <AddShoppingCart />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </CardActions>
      </Card>
    );
  }
}

ProductCardStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  discount: PropTypes.string,
  width: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ratting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  addToCart: PropTypes.func,
};

ProductCardStudent.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => false,
  addToCart: () => false,
};

const ProductCardResponsive = withWidth()(ProductCardStudent);
export default withStyles(styles)(ProductCardResponsive);

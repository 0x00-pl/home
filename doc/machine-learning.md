week1
---

introduction

supervised learning = learn function(x->y) from ( X(data) + Y(tags of data) )
unsupervised learning = learn function(x->y) from only ( X(data) ) without ( Y(tags of data) )


linear regression with one variable

model representation:
 exist i, (x[i], y[i]). called training example.
 forall i, (x[i], y[i]). called training set.
 function h: X->Y. that function h use x to predicted y. h is learned by training set using learning algorithm.
 
cost function:
 m = count of training examples.
 J(theta[0], theta[1]) = (1/2\*m)\*sum(i for each index of training examples)((h(theta, x[i]) - y[i])^2)
 J is cost function, represent how bad the function h(theta, _) be.
 
 gradient descent:
  a = learning rate, is a small number.
  forall j, theta[j] -= a(d theta[j])(J(theta[0], theta[1]))
   the gradient: change rate of J by changing theta[j]


week2
---

linear rregression with multiple variables

 forall m,
 function h(theta, x) = theta[0] + theta[1]\*x[1] + theta[2]\*x[2] + ... + theta[m]\*x[m]

 function h(theta:matrix<1,m>, x:matrix<m,1>) = theta'\*x
 
gradient descent for multiple variables
 a = learning rate
 m = count of examples
 forall i j,
 repeat until convergence: {
  theta[j] <- theta[j] - a\*(1/m)\*sum(h(theta, x[i])-y[i])\*x[i][j]
 }
 
feature scaling

 u = avg(x[:])
 s = max(x[:]) - min(x[:])
 x[i] <- (x[i]-u)/s

learning rate

 a = learning rate
 if a is too large, it will not convergence
 if a is too small, it will convergence too slow
 
 polynomial regession
 
  can also add features like x[1]^2 or x[1]^(1/2) or x[1]*x[2]
  
  
normal equation

 X \* theta = y
 X' \* X \* theta = X' \* y
 theta = (X' \* X)^-1 \* X' \* y
 

tips
 n = count of features
 m = count of examples
 x:matrix<n, 1>
 X:matrix<m, n>
 theta:<n, 1>
 
 theta' \* x : matrix<1, 1>
 X \* theta : matrix<m, 1>



week3
---

calssification

 g(z) = sigmoid(z) = 1/(1+e^-z)
 h(theta, x) = g(theta' \* x)
 
 d(y) = decide(y) = if y < 0.5 then 0 else 1
 
 
cost function

 c(y1, y) = if y == 1 then -log(y1) else -log(1-y1)
 m = count of examples
 J(theta) = (1/m)\*sum(i from 1 to m)(c(h(theta, x[i]), y[i]))


simplified cost function and gradient descent

 c1(y1, y) = c(y1, y) = -y \* log(y1) - (1-y) \* log(1-y1) 
 h = g(X \* theta)
 m = count of examples
 J(theta) = (1/m) \* (-y' \* log(h) -(1-y)' \* log(1-h))
 J'(theta) = -(1/m) \* X' \* (g(X \* theta)-y)
 
 
one vs all
 if y in {0,1, ... ,n}
 genrate y0,y1, ... ,yn for training theta0, ... ,thetan
 which yi = y if index == i then 1 else 0 

and find the max h(theta[i], x) is the predect i of x


regularization

overfitting

 cost of training set is low
 cost of test set is heigh
 
 
cost function

 lambda = regularization parameter
 m = count of examples
 J(theta) = (1/(2\*m)) \* sum(i from 1 to m)((h(theta,x[i])-y[i])^2) + lambda \* sum(j from 2 to n)(theta[j]^2)
 
 J'(theta) = (1/m) \* sum(i for 1 to m)(h(theta,x[i])-y[i])x[i] + (lambda/m) \* theta_with_1_colum_set_to_zero
 
 
normal equation

 L = diag(0,1,1, ... ,1)
 theta = (X'X + lambda \* L)^-1 \* X' \* y
 

regularized logistic regression

 m = count of examples
 cost(y1, y) = -y \* log(y1) -(1-y) \* log(1-y1)
 J(theta) = (1/m) \* sum(i from 1 to m)(cost(h(theta, x))) + lambda/(2\*m) \* sum(j from 2 to n)(theta[j]^2)
 
 
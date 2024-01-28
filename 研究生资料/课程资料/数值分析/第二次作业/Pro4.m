% a = 2;
% b = 1;
% error = 0.001;
% fa = exp(b) + b - 7;
% fb = exp(a) + a - 7;
% while(res_down * res_up < 0)
%         x = 0.5*(a + b);%求区间(a,b)的中点c.
%         res = x^3 - x - 1;%计算f(c)
%         
%         if( res*res_down < 0 )
%                 a = x;% 若f(a)·f(c)<0,则令b=c;
%         else
%                 b = x;%若f(c)·f(b)<0,则令a=c.
%         end
%       
%         if( abs(a-b) < error ) %确定区间[a,b],验证f(a)·f(b)<0,给定精确度ξ.
%                 break;
%         end
% end
% fprintf('二分法结果：%.8f',result_x)

clear,clc
f=@(x)exp(x)+x-7;
fun=@(x)7-exp(x);
x=1.5;
for i=1:50
    while abs(f(x))>0.01
    x=fun(x);
    end 
end
fprintf('不动点迭代法：%.8f',x)


% a = 2;
% b = 1;
% error = 0.001;
% fa = exp(b) + b - 7;
% fb = exp(a) + a - 7;
% while(res_down * res_up < 0)
%         x = 0.5*(a + b);%������(a,b)���е�c.
%         res = x^3 - x - 1;%����f(c)
%         
%         if( res*res_down < 0 )
%                 a = x;% ��f(a)��f(c)<0,����b=c;
%         else
%                 b = x;%��f(c)��f(b)<0,����a=c.
%         end
%       
%         if( abs(a-b) < error ) %ȷ������[a,b],��֤f(a)��f(b)<0,������ȷ�Ȧ�.
%                 break;
%         end
% end
% fprintf('���ַ������%.8f',result_x)

clear,clc
f=@(x)exp(x)+x-7;
fun=@(x)7-exp(x);
x=1.5;
for i=1:50
    while abs(f(x))>0.01
    x=fun(x);
    end 
end
fprintf('�������������%.8f',x)


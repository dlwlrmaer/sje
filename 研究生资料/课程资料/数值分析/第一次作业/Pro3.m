I=0;I0=exp(1)-1;
fprintf('正向推导：\n');
fprintf('I0:%.12f\n',I0);
for i=1:20
    I=exp(1)-i*I0;
    I0=I;
    fprintf('I%d:%.12f\n',i,I);
end
I1=0;I20=(exp(1)-1)/21;
fprintf('反向推导：\n');
fprintf('I20:%.12f\n',I20);
for i=1:20
    I1=(exp(1)-I20)/(21-i);
    I20=I1;
    fprintf('I%d:%.12f\n',20-i,I1);
end
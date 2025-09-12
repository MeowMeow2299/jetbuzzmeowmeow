import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './LivePage.css';

// Generate all live games from the LIVE folder
const generateLiveGames = () => {
  const games = [];
  
  // EG4 series (most of the files)
  for (let i = 126; i <= 4483; i++) {
    if (i === 4157 || i === 4158 || i === 4161 || i === 4168 || i === 4170 || i === 4182 || i === 4192 || i === 4193 || i === 4200 || i === 4201 || i === 4202 || i === 4203 || i === 4204 || i === 4205 || i === 4206 || i === 4207 || i === 4208 || i === 4209 || i === 4210 || i === 4211 || i === 4212 || i === 4213 || i === 4214 || i === 4215 || i === 4216 || i === 4217 || i === 4218 || i === 4219 || i === 4220 || i === 4221 || i === 4222 || i === 4223 || i === 4224 || i === 4225 || i === 4226 || i === 4227 || i === 4228 || i === 4229 || i === 4230 || i === 4231 || i === 4232 || i === 4233 || i === 4234 || i === 4235 || i === 4236 || i === 4237 || i === 4238 || i === 4239 || i === 4240 || i === 4241 || i === 4242 || i === 4243 || i === 4244 || i === 4245 || i === 4246 || i === 4247 || i === 4248 || i === 4249 || i === 4250 || i === 4251 || i === 4252 || i === 4253 || i === 4254 || i === 4255 || i === 4256 || i === 4257 || i === 4258 || i === 4259 || i === 4260 || i === 4261 || i === 4262 || i === 4263 || i === 4264 || i === 4265 || i === 4266 || i === 4267 || i === 4268 || i === 4269 || i === 4270 || i === 4271 || i === 4272 || i === 4273 || i === 4274 || i === 4275 || i === 4276 || i === 4277 || i === 4278 || i === 4279 || i === 4280 || i === 4281 || i === 4282 || i === 4283 || i === 4284 || i === 4285 || i === 4286 || i === 4287 || i === 4288 || i === 4289 || i === 4290 || i === 4291 || i === 4292 || i === 4293 || i === 4294 || i === 4295 || i === 4296 || i === 4297 || i === 4298 || i === 4299 || i === 4300 || i === 4301 || i === 4302 || i === 4303 || i === 4304 || i === 4305 || i === 4306 || i === 4307 || i === 4308 || i === 4309 || i === 4310 || i === 4311 || i === 4312 || i === 4313 || i === 4314 || i === 4315 || i === 4316 || i === 4317 || i === 4318 || i === 4319 || i === 4320 || i === 4321 || i === 4322 || i === 4323 || i === 4324 || i === 4325 || i === 4326 || i === 4327 || i === 4328 || i === 4329 || i === 4330 || i === 4331 || i === 4332 || i === 4333 || i === 4334 || i === 4336 || i === 4337 || i === 4338 || i === 4339 || i === 4340 || i === 4341 || i === 4343 || i === 4344 || i === 4345 || i === 4346 || i === 4347 || i === 4350 || i === 4351 || i === 4352 || i === 4353 || i === 4354 || i === 4355 || i === 4356 || i === 4358 || i === 4359 || i === 4360 || i === 4362 || i === 4363 || i === 4364 || i === 4365 || i === 4369 || i === 4370 || i === 4371 || i === 4372 || i === 4373 || i === 4374 || i === 4375 || i === 4376 || i === 4377 || i === 4378 || i === 4379 || i === 4380 || i === 4381 || i === 4382 || i === 4383 || i === 4384 || i === 4385 || i === 4386 || i === 4387 || i === 4388 || i === 4389 || i === 4390 || i === 4391 || i === 4392 || i === 4393 || i === 4394 || i === 4395 || i === 4396 || i === 4397 || i === 4398 || i === 4399 || i === 4400 || i === 4401 || i === 4402 || i === 4403 || i === 4404 || i === 4405 || i === 4406 || i === 4407 || i === 4408 || i === 4409 || i === 4410 || i === 4411 || i === 4412 || i === 4413 || i === 4414 || i === 4415 || i === 4416 || i === 4417 || i === 4418 || i === 4429 || i === 4430 || i === 4431 || i === 4432 || i === 4433 || i === 4434 || i === 4435 || i === 4436 || i === 4437 || i === 4438 || i === 4439 || i === 4440 || i === 4441 || i === 4442 || i === 4443 || i === 4444 || i === 4445 || i === 4446 || i === 4447 || i === 4448 || i === 4449 || i === 4450 || i === 4451 || i === 4452 || i === 4453 || i === 4454 || i === 4455 || i === 4456 || i === 4457 || i === 4458 || i === 4459 || i === 4460 || i === 4461 || i === 4462 || i === 4463 || i === 4464 || i === 4465 || i === 4466 || i === 4467 || i === 4468 || i === 4469 || i === 4470 || i === 4471 || i === 4472 || i === 4473 || i === 4474 || i === 4475 || i === 4476 || i === 4477 || i === 4478 || i === 4479 || i === 4480 || i === 4481 || i === 4482 || i === 4483) {
      continue; // Skip missing numbers
    }
    
    // Add both versions (with and without 2 suffix)
    games.push({
      image: `/photo/LIVE/EG4${i}.png`,
      title: `EG4${i}`
    });
    
    if (i <= 4482) { // Only add 2 suffix for numbers that exist
      games.push({
        image: `/photo/LIVE/EG4${i}2.png`,
        title: `EG4${i}2`
      });
    }
  }
  
  return games;
};

const LivePage = () => {
  const navigate = useNavigate();
  const allGames = generateLiveGames();
  const [visibleCount, setVisibleCount] = useState(24); // Show 24 games initially
  const itemsPerLoad = 24; // Load 24 more games each time

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerLoad, allGames.length));
  };

  const visibleGames = allGames.slice(0, visibleCount);
  const hasMore = visibleCount < allGames.length;

  console.log('LivePage loaded with', allGames.length, 'total games, showing', visibleCount);

  return (
    <div className="live-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="live-header">Live</h1>
      </div>
      <div className="live-grid">
        {visibleGames.map((card, index) => (
          <div key={index} className="live-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="live-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="live-title">{card.title}</div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More ({allGames.length - visibleCount} remaining)
          </button>
        </div>
      )}
      
      {!hasMore && (
        <div className="all-loaded-container">
          <p className="all-loaded-text">All {allGames.length} live games loaded!</p>
        </div>
      )}
    </div>
  );
};

export default LivePage;